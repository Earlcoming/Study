// 注册
exports.regUser = (req, res) => {
  const userInfo = req.body;
  if(!userInfo.username || !userInfo.password)
  console.log(userInfo);

  res.send("reguser OK");
};

// 登录
exports.login = (req, res) => {
  res.send("login OK");
};