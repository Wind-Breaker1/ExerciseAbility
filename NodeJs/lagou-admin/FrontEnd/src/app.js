// 本文件是入口文件

//载入路由
import router from './routes';
// import './assets/common.css';

// $.ajax({
//   url: '/api/users/isAuth',
//   success(result) {
//     if (result.ret) {
//       router.go('/index');
//     } else {
//       console.log(22)
//       router.go('/signin');
//     }
//   }
// })
const hash = location.hash.slice(1);
router.go(hash);
