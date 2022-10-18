const { urlencoded } = require('express');
var mongoose = require('mongoose');
var url = require('url');
var { Head } = require('../untils/config.js')
var UserSchema = new mongoose.Schema({//创建表
    username: { type: String, require: true},
    password: { type: String, require: true },
    email: { type: String, require: true }, //index: { unique: true }
    date: { type: Date, default: Date.now() },
    isAdmin: { type: Boolean, default: false },
    isFreeze: { type: Boolean, default: false },
    userHead: {type: String, default: url.resolve(Head.baseUrl, '1.jpg')}
})


var UserModel = mongoose.model('user', UserSchema);

var register = (data) => {
    var user = new UserModel(data);
    return user.save().then(() => {
        return true;
    }).catch(() => {
        return false;
    })
};
var findLogin = data => {
    return UserModel.findOne(data);
};
var updatePassword = ({ PS, email }) => {
    return UserModel.updateOne({ "email":email }, { "password" :PS }).then(() => {
        return true;
    }).catch((err) => {
        return false;
    })
};
var usersList = () => {
    return UserModel.find();
};
var updateFreeze = (email, isFreeze) => {
    return UserModel.updateOne({"email":email }, { "isFreeze": isFreeze }).then(() => {
        return true;
    }).catch((err) => {
        return false;
    });
};
var deleteUser = (email) => {
    return UserModel.deleteOne({ email });
};
var updateUserHead = ({ username, userHead }) => {
    return UserModel.updateOne({ "username":username }, { "userHead":  userHead  }).then(() => {
        return true;
    }).catch((err) => {
        return false;
    });
}
module.exports = {
    register,
    findLogin,
    updatePassword,
    usersList,
    updateFreeze,
    deleteUser,
    updateUserHead
}