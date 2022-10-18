const {verify} = require('../utils/tool')
const auth = (req, res, next) => {
  res.set('content-type', 'application/json;charset=utf-8');
  let token = req.get('X-Access-Token');

  // console.log("auth")
  // console.log(token)
  try {
    let result = verify(token);
    next();
  } catch (err) {
    res.render('fail', {
      data: JSON.stringify({
        message: '请登录！'
      })
    })
  }
}


exports.auth = auth;