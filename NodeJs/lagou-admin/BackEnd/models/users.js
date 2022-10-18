const { Users } = require('../utils/db');

const findUser = (username) => {
  return Users.findOne({username})
}

const signup = ({ username, password }) => {
  const users = new Users({
    username,
    password
  })
  return users.save();
}

const findList = () => {
  return Users.find().sort({ _id: -1 });
}

const deleteUser = id => {
  // 必须要接收该函数执行结果，该函数才会执行
  return Users.deleteOne({_id: id});
}
exports.signup = signup;
exports.findUser = findUser;
exports.findList = findList;
exports.deleteUser = deleteUser;