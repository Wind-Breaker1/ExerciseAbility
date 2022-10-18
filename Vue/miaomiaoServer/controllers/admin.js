var UserModel = require('../modules/users.js')
var index = async (req, res, next) => {
    res.send({
        msg: '管理员',
        ststus: 0
    })
};

var usersList = async (req, res, next) => {
    var result = await UserModel.usersList();
    if (result) {
        res.send({
            msg: '所有用户信息',
            status: 0,
            data: {
                userList: result
            }
        })
    } else {
        res.send({
            msg: '返回信息失败',
            status: -1,
        })
    }
};
var updateFreeze = async (req, res, next) => {
    var { email, isFreeze } = req.body;
    // console.log(req.body);
    // res.send({
    //     msg: req.body,
    //     staus: 12
    // })
    console.log(req.body.email);
    console.log(isFreeze);
    var result = await UserModel.updateFreeze(email, isFreeze);
    if (result) {
        res.send({
            msg: '账户冻结操作成功',
            status: 0,
        })
    } else {
        res.send({
            msg: '账户冻结操作失败',
            status: -1,
        })
    }
};
var deleteUser = async (req, res, next) => {
    // console.log(req.body);
    // res.send({
    //     msg: req.body,
    //     staus: 12
    // })
    var { email } = req.body;
    var result = await UserModel.deleteUser(email);
    if (result) {
        res.send({
            msg: '账号删除操作成功',
            status: 0
        });
    }
    else {
        res.send({
            msg: '账号删除操作失败',
            status: -1
        });
    }
};

module.exports = {
    index,
    usersList,
    updateFreeze,
    deleteUser
}