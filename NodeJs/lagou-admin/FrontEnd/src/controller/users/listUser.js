import usersTpl from '../../views/users.art';
import usersListTpl from '../../views/users-list.art';
import pagenation from '../../components/pagenation'
import page from '../../databus/page';
import { addUser } from './addUser';
import { usersList as usersListModel } from '../../models/users-list';
import auth from '../../models/auth';
import { remove } from '../common';
const pageSize = page.pageSize;
let state = {
  list: []
};

const _subscribe = () => {
  $('body').on('changeCurPage', (e, index) => {
    page.setCurPage(index);
    _list(index);
  })
  $('body').on('addUser', () => {
    _loadData();
  })
}
// 加载数据
const _loadData = async () => {
  let res = await usersListModel();
  state.list = res.data;
  pagenation(res.data);

  // 渲染第一页
  _list(page.currentPage);
  return true;
  // console.log(currentPage)
}
// 渲染用户列表
const _list = (pagenum) => {
  let start = (pagenum - 1) * pageSize;
  $('#users-list').html(usersListTpl({
    data: state.list.slice(start, start + 3)
  })); 
}
// 绑定事件
// const _methods = () => {
//   $('#users-list').on('click', '.remove', async function () {
//     // console.log($(this))
//     // 此函数是异步函数
//     let result = await deleteUser($(this).data('id'));
//     if (result.ret) {
//       _loadData();
//       // 此时datalist还没更新好
//       let isLastPage = Math.ceil(dataList.length / pageSize) == page.currentPage;
//       let restOne = dataList.length % pageSize == 1;
//       if (isLastPage && restOne && page.currentPage > 0) {
//         page.setCurPage(page.currentPage - 1)
//       }
//     }
//   })
// }
const index = (router) => {
  const loadIndex = (res, next) => {
    //填充用户列表
    // $('#content').html(usersTpl());
    next();
    res.render(usersTpl({}))
    $('#add-user-btn').on('click', addUser);
    // 绑定删除事件
    remove({
      $box: $('#users-list'),
      url: '/api/users',
      loadData: _loadData,
      state,
   })
    //加载数据并渲染
    _loadData();
    // 订阅
    _subscribe()

    // 绑定登出事件
    $('#users-signOut').off('click').on('click', (e) => {
      e.preventDefault();
      localStorage.setItem('lg-token', "");
      location.reload();
    })
  };

 
  return async (req, res, next) => {
    let result = await auth();
    if (result.ret) {
      loadIndex(res, next);
    } else {
      router.go('/signin');
    }
  }
  // 登出事件绑定
  
};
export default index;





