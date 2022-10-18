var path = require('path');
var fs = require('fs');

const token1 = (req, res, next) => {
  console.log(1)
  res.send('ok')
}
exports.token1 = token1;