import { removeModel } from '../../models/delete'
import page from '../../databus/page'
const remove = ({
  $box,
  url,
  loadData,
  state//传递一个引用类型state,在删除组件里能实时获取数据条数
}) => {
  const pageSize = page.pageSize
  // 删除事件绑定
  $box.on('click', '.remove', async function () {
    let length = state.list.length;
    // 此函数是异步函数
    let result = await removeModel({
      id: $(this).data('id'),
      url
    });
    console.log(result);
    if (result.ret) {
      
      loadData();
      // 此时datalist还没更新好
      
      // console.log(isLastPage)
      let isLastPage = Math.ceil(length / pageSize) == page.currentPage;
      let restOne = length % pageSize == 1;
      if (isLastPage && restOne && page.currentPage > 0) {
        // console.log(length);
        page.setCurPage(page.currentPage - 1);
      }
    }
  });
}

export {
  remove
}