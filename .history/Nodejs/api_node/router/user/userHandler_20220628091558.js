const path = require("path");
const msg = require(path.join(process.cwd(), "global/msg.js"));
const { checkUserInfo, setUser } = require(path.join(
  process.cwd(),
  "global/sql.js"
));

const db = require(path.join(process.cwd(), "db/"));

module.exports.reguser = (req, res) => {
  const userInfo = req.body;
  // 用户名或密码不能为空
  if (!userInfo.username || !userInfo.password) {
    return res.cc(msg.user, 401);
  }

  // 数据库查询用户名存不存在
  console.log(checkUserInfo, userInfo.username, userInfo);
  db.query(checkUserInfo, userInfo.username, (err, results) => {
    console.log("查询结果", results.length);
    if (err) return res.cc(err.message);
    if (results.length > 0) return res.cc(msg.userHas);
  });

  // 未检查到用户名，添加用户名
  db.query(setUser, [username: userInfo.username, password: username])
  
  
};