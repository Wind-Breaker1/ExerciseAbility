import GP21Router from 'gp21-router';

const router = new GP21Router('root');

import index from '../controller/index'
import signin from '../controller/signin'
import auth from '../models/auth';
import listUsers from '../controller/users/listUser';
import listPositions from '../controller/positions/listPositions';
// 检验权限
router.use(async (req) => {
  
  // 打开的第一个网页
  let result = await auth();
  
  // console.log(result)
  if (result.ret) {
    router.go(req.url)
  } else {
    router.go('/signin')
  }
})
// router.route('/', () => { });
router.route('/signin', signin(router)); 
router.route('/index', index(router));
router.route('/index/users', listUsers(router))
router.route('/index/positions', listPositions(router))

// 
// router.route('*', (req, res, next) => {
//   res.redirect('/index/users')
// })
export default router 