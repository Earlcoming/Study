const path = require("path");
const msg = require(path.join(process.cwd(), "global/msg.js"));
const { checkUserInfo, setUser } = require(path.join(
  process.cwd(),
  "global/sql.js"
));

module.exports.reguser = (req, res) => {
  const userInfo = req.body;
  // 用户名或密码不能为空
  if (!userInfo.username || !userInfo.password) {
    return res.cc(msg.user, 401);
  }

  
  res.cc(msg.reg, 200);
};
