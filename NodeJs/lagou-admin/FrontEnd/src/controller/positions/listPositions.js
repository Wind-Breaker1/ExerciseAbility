import positionsTpl from "../../views/positions.art";
import positionsListTpl from '../../views/positions-list.art';
import pagenation from '../../components/pagenation';
import auth from '../../models/auth';
import { positionsList } from '../../models/positions-list'
import page from '../../databus/page';
import { addPosition } from './addPosition';
import { remove } from '../common';
import {updatePosition, fillPositionsUpdateTpl} from './updatePosition'
// let state.list ;
const pageSize = page.pageSize;
let state = {
  list: []
};

const _subscribe = () => {
  $('body').off('changeCurPage').on('changeCurPage', (e, index) => {
    page.setCurPage(index);
    _list(index);
    // console.log(index)
  })
  $('body').off('addUser').on('addUser', () => {
    _loadData();
  })
}
// 渲染用户列表
const _list = (pagenum) => {
  let start = (pagenum - 1) * pageSize;
  // console.log(start)
  $('#positions-list').html(positionsListTpl({
    data: state.list.slice(start, start + 3)
  }));
  // console.log(state.list.slice(start, start + 3))

}
// 加载数据
const _loadData = async () => {
  let list = await positionsList();
  state.list = list;
  // 分页
  pagenation(list);

  // 渲染第一页
  _list(page.currentPage);

  return true;
}
const listPositions = (router) => {
  return async (req, res, next) => {
    let result = await auth();
    if (result.ret) {
      next(); 
      res.render(positionsTpl());
      $('#add-position-btn').on('click', addPosition());
     
      // 加载数据
      _loadData();
      // 订阅
      _subscribe();

      updatePosition()
      // 编辑
      $('#positions-list')
        .off('click')
        .on('click', '.positions-update', function() {
          // console.log(0)
          fillPositionsUpdateTpl($(this).data('id'));
          console.log($(this).data('id'))
        })
      // 绑定删除事件
      remove({
        $box: $('#positions-list'),
        url: '/api/positions/remove',
        loadData: _loadData,
        state,
      })
      // $('#add-position-btn').off()
    } else {
      router.go('/signin');
    }
  }
};
export default listPositions;