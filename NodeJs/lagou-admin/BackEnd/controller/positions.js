const positionsModel = require('../models/positions');
const moment = require('moment');
// 增
exports.add = async(req, res, next) => {
  res.set('content-type', 'application/json;charset=utf-8');
  let result = await positionsModel.add({
    ...req.body,
    companyLogo: req.companyLogo,
    createTime: moment().format('YYYY年MM月DD日 HH:mm')
  })
  if (result) {
    process.socket.emit('message', 'ok');
    res.render('succ', {
      data: JSON.stringify({
        message: '添加成功！'
      })
    });
  } else {
    res.render('fail', {
      data: JSON.stringify({
        message: '添加失败！'
      })
    });
  }
}
// 删除
exports.remove = async (req, res) => {
  res.set('content-type', 'application/json;charset=utf-8');
  let result = await positionsModel.remove(req.body.id)
  if (result) {
    res.render('succ', {
      data: JSON.stringify({
        message: '删除成功！'
      })
    });
  } else {
    res.render('fail', {
      data: JSON.stringify({
        message: '删除失败！'
      })
    });
  }
}
// 更新
exports.update = async (req, res) => {
  res.set('content-type', 'application/json;charset=utf-8');
  const data = {
    ...req.body
  }
  // if (req.companyLogo) {
  //   data.companyLogo = req.companyLogo;
  // }
  let result = await positionsModel.update(data)
  if (result) {
    res.render('succ', {
      data: JSON.stringify({
        message: '更新成功！'
      })
    });
  } else {

    res.render('fail', {
      data: JSON.stringify({
        message: '更新失败！'
      })
    });
  }
}
// 加载列表
exports.list = async (req, res) => {
  res.set('content-type', 'application/json;charset=utf-8');

  let result = await positionsModel.list({})
  if (result) {
    res.render('succ', {
      data: JSON.stringify(result)
    });
  } else {
    res.render('fail', {
      data: JSON.stringify({
        message: '获取信息失败！'
      })
    });
  }
}

// 加载某一列表
exports.listone = async (req, res) => {
  res.set('content-type', 'application/json;charset=utf-8');
  // console.log(req.body.id)
  let result = await positionsModel.listone(req.body.id)
  if (result) {
    res.render('succ', {
      data: JSON.stringify(result)
    });
  } else {
    res.render('fail', {
      data: JSON.stringify({
        message: '该职位不存在！'
      })
    });
  }
}