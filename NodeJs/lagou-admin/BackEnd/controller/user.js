const { hash, compare } = require('../utils/tool');
const { sign, verify} = require('../utils/tool');
const usersModel = require('../models/users');
// const randomstring = require('randomstring')

// 注册用户
const signup = async (req, res, next) => {
  res.set('content-type', 'application/json;charset=utf-8');
  const { username, password } = req.body;
  //密码加密
  const bcryptPassword = await hash(password);
  // 判断用户是否存在
  let findResult = await usersModel.findUser(username);

  if (findResult) {
    res.render('fail', {
      data: JSON.stringify({
        message: '用户名已存在！'
      })
    });
  } else {
    // 数据库你没有这个用户
    let result = await usersModel.signup({
      username,
      password: bcryptPassword
    });
  
    if (result) {
      res.render('succ', {
        data: JSON.stringify({
          message: '注册成功！'
        })
      });
    } else {
      res.render('fail', {
        data: JSON.stringify({
          message: '注册失败！'
        })
      });
    }
    
  }
}

//查询用户列表
const list = async (req, res, next) => {
  // console.log('列表：')
  // console.log(req.session)
  res.set('content-type', 'application/json;charset=utf-8');
  const lisResult = await usersModel.findList();
  res.render('succ', {
    data: JSON.stringify(lisResult)
  })
}

// 删除用户
const deleteUser = async (req, res, next) => {
  res.set('content-type', 'application/json;charset=utf-8');
  const { id } = req.body;
  // 这里必须要await
  let result = await usersModel.deleteUser(id);
  console.log(result)
  if (result.deletedCount != 0) {
    res.render('succ', {
      data: JSON.stringify({
        message: '用户删除成功！'
      })
    })
  } else {
    res.render('fail', {
      data: JSON.stringify({
        message: '用户删除失败！'
      })
    })
  }
}

// 登录
const signin = async (req, res, next) => {
  res.set('content-type', 'application/json;charset=utf-8');
  const { username, password } = req.body;

  let result = await usersModel.findUser(username);

  // console.log(result)
  // 验证用户是否是合法用户
  if (result) {
    // 给password起别名为hash
    let { password: hash } = result;
    let compareResult = await compare(password, hash);

    if (compareResult) {
      // const sessionId = randomstring.generate();
      // 后端通过http在前端中cookie
      // res.set('Set-Cookie', `sessionId=${sessionId}; Path=/; HttpOnly`);

      // session方法
      // req.session.username = username;
     
      const token = sign(username);
      // console.log(22)
      // console.log(token);
      // 自定义首部字段以x-开头，在头部传回
      res.set('X-Access-Token', token);
      
      res.render('succ', {
        data: JSON.stringify({
          message: '登陆成功！'
        })
      })
      // console.log('登录222：')
      // console.log(req.session);
    } else {
      res.render('fail', {
        data: JSON.stringify({
          message: '用户名或密码错误！'
        })
      })
    }
  } else {
    res.render('fail', {
      data: JSON.stringify({
        message: '用户名错误！'
      })
    })
  }


}

// 退出登录
const signOut = async (req, res, next) => {
  req.session = null;
  res.render('succ', {
    data: JSON.stringify({
      message: '退出成功！'
    })
  })
}

// 判断是否登录
const isAuth = async (req, res, next) => {
  res.set('content-type', 'application/json;charset=utf-8');
  let token = req.get('X-Access-Token');
  // console.log(1111)
  // console.log(token)
  try {
    let result = verify(token);
    // console.log("isauth")
    // console.log(result);
    res.render('succ', {
      data: JSON.stringify({
        username: result.username
      })
    })
  } catch (err) {
    res.render('fail', {
      data: JSON.stringify({
        message: '请登录！'
      })
    })
  }
  
  
  // if (req.session.username) {
  //   res.render('succ', {
  //     data: JSON.stringify({
  //       username: req.session.username
  //     })
  //   })
  // } else {
  //   
  // }
}

exports.signup = signup;
exports.list = list;
exports.deleteUser = deleteUser;
exports.signin = signin;
exports.signOut = signOut;
exports.isAuth = isAuth;