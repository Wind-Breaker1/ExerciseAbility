import userListPageTpl from '../views/users-page.art';
import page from '../databus/page';

let pageSize = page.pageSize;
const _setPageActive = (index) => {
  //添加点击事件
  $('#users-page-list li:not(:first-child, :last-child)')
    .eq(index - 1).addClass('active').siblings().removeClass('active');
}
// 分页

const pagenation = (data) => {

  let pageSum = data.length;
  let pageCount = Math.ceil(pageSum / pageSize);
  let pageArray = new Array(pageCount);
  const htmlPage = userListPageTpl({
    pageArray
  })
  $('#user-page').html(htmlPage);
  _setPageActive(page.currentPage);
  _bindEvent(pageSum, pageSize);
}


const _bindEvent = (pageSum, pageSize) => {
  // console.log("_b")
  // console.log(pageSum)
  $('#user-page').off('click').on('click', '#users-page-list li:not(:first-child, :last-child)', function () {
    const index = $(this).index();
    _setPageActive(index);
    $('body').trigger('changeCurPage', index);
  })
  // 上一页
  $('#user-page').on('click', '#users-page-list li:first-child', function () {
    if (page.currentPage > 1) {
      page.setCurPage(page.currentPage - 1);
      $('body').trigger('changeCurPage', page.currentPage);
      _setPageActive(page.currentPage);
      
    }
  })
  // 下一页
  $('#user-page').on('click', '#users-page-list li:last-child', function () {
    if (page.currentPage < Math.ceil(pageSum / pageSize)) {
      page.setCurPage(page.currentPage + 1);
      $('body').trigger('changeCurPage', page.currentPage);
      _setPageActive(page.currentPage);
    }
  })
  
  // 点击绑定
 
}
export default pagenation