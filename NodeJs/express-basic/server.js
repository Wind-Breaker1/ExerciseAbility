const express = require('express');
const app = express();
const router = express.Router();
// app.use('/', (req, res) => {
//     // console.log(0);
//     res.send('hello');
// })

const { token1 } = require('./controller/index.js');
// router.get('/api/list', list);
router.get('/api/token', () => {
    console.log(1)
});

app.listen(8080, () => {
    console.log('localhost:8080');
})
