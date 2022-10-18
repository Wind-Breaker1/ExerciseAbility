import indexTpl from "../views/index.art";
import auth from '../models/auth';
import img from '../assets/user2-160x160.jpg';
import pageHeader from "../components/pageheader";
import page from '../databus/page';


const index = (router) => {
  return async (req, res, next) => {
    let result = await auth();
    if (result.ret) {
      const html = indexTpl({
        subRouter: res.subRoute(),
        img
      })
      next(html);

      //window resize让页面撑满整个屏幕
      $(window, '.wrapper').resize();

      pageHeader();
      const $as = $('#siderbar-menu li:not(:first-child) a')
      let hash = location.hash;
      
      $as.filter(`[href="${hash}"]`).parent().addClass('active').siblings().removeClass('active');
      // 是否充值page
      if (page.currentRoute != hash) {
        page.reset();
      } 
      
      // 当前url保存
      page.setCurRoute(hash);

      // var socket = io.connect('http://localhost:8080/socket');
      // socket.on('message', function (msg) {
      //   let num = ~~$('#icon-email').text();
      //   $('#icon-email').text(++num);
      // })
    } else {
      router.go('/signin');
    }

    
  }

};
export default index;