const express = require('express');

// 路由中间件
const router = express.Router();

router.get('/index', (req, res, next) => {
    let query = req.query;
})
router.post('/index', (req, res, next) => {
    let body = req.body;

})
module.exports({
    router
})