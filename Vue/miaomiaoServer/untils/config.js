var mongoose = require('mongoose');

// 引入邮箱
var nodemailer = require('nodemailer');
var Mongoose = {
    url: 'mongodb://localhost:27017/miaomiao',
    connect() {
        mongoose.connect(this.url, {
            useNewUrlParser: true
        }, err => {
            if (err) {
                console.log('数据库连接失败');
                return;
            }
            console.log('连接成功');
        });
    }
};
// 配置邮箱
var Email = {
    config: {
        host: "smtp.qq.com",
        port: 587,
        auth: {
            user: '2505287290@qq.com', // generated ethereal user 发送人邮箱地址
            pass: 'kskoxtqxutjodjhi', // generated ethereal password 发送人邮箱授权码
        }
    },
    // 直接获得对象
    get transporter() {
        return nodemailer.createTransport(this.config);
    },
    // 生成验证码
    get verify() {
        return Math.random().toString().substring(2, 6);
    },
    // 获取当前时间
    get time() {
        return Date.now();
    }

};

var Head = {
    baseUrl: 'http://localhost:3000/uploads/'
};

module.exports = {
    Mongoose,
    Email,
    Head
};