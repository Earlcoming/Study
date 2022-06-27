// 注册
exports.regUser = (req, res) => {
  const userInfo = req.body;
  if(!userInfo.username || !userInfo.password) {
    return res.send({
      status: 1,
      msg: '用户名'
    })
  }
  console.log(userInfo);

  res.send("reguser OK");
};

// 登录
exports.login = (req, res) => {
  res.send("login OK");
};
