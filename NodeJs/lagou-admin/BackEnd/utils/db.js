var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/lagou-admin', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  // useFindAndModify: true
});

var db = mongoose.connection;
db.on('err', console.error.bind(console, '连接失败！'));

var usersSchema = mongoose.Schema({
  username: String,
  password: String
});

var Users = mongoose.model('users', usersSchema);


// 构建positions
var positionSchema = mongoose.Schema({
  companyLogo: String,
  companyName: String,
  positionName: String,
  city: String,
  createTime: String,
  salary: String
});

var Positions = mongoose.model('position', positionSchema);
exports.Users = Users;
exports.Positions = Positions;