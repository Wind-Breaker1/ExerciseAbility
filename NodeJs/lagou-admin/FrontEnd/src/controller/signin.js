import siginTpl from '../views/signin.art';
import { signin as singninModel } from '../models/signin'
const htmlSigin = siginTpl({});

// 登录
const signin = (router) => {
  return (req, res, next) => {
    // console.log("1111")
    // console.log(req.session)
    res.render(htmlSigin);
    $("#signin").on("submit", handleSubmit(router));
  }
}
// 登录提交
const handleSubmit = (router) => {
  return async (e) => {
    e.preventDefault()
    // 使用serialize()方法要给表单加name属性
    const data = $('#signin').serialize();
    // console.log(data);
    let result = await singninModel(data);
    const token = result.jqXHR.getResponseHeader('X-Access-Token');
    localStorage.setItem('lg-token', token);
    
    if (result.res.ret) {
      // console.log(1)
      router.go('/index/users');
    }
  }
}

export default signin;