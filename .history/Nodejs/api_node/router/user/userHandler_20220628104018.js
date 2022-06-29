const bcrypt = require("bcryptjs");
const path = require("path");
const jwt = require("jsonwebtoken");
const msg = require(path.join(process.cwd(), "global/msg.js"));
const { checkUserInfo, setUser } = require(path.join(
  process.cwd(),
  "global/sql.js"
));

const db = require(path.join(process.cwd(), "db/"));

exports.reguser = (req, res) => {
  const userInfo = req.body;
  // 用户名或密码不能为空
  if (!userInfo.username || !userInfo.password) {
    return res.cc(msg.user);
  }

  // 数据库查询用户名存不存在
  db.query(checkUserInfo, userInfo.username, (err, results) => {
    console.log("查询结果", results.length);
    if (err) return res.cc(err.message);
    if (results.length > 0) return res.cc(msg.userHas);
  });

  // 未检查到用户名，添加用户名
  userInfo.password = bcrypt.hashSync(userInfo.password, 10); //添加随机盐
  db.query(
    setUser,
    { username: userInfo.username, password: userInfo.password },
    (err, results) => {
      if (err) return res.cc(err.message);
      if (results.affectedRows !== 1) {
        return res.cc(msg.regErr);
      }
      res.cc(msg.reg, 200);
    }
  );
};

const { secret } = require(path.join(process.cwd(), "/global/secret"));
exports.login = (req, res) => {
  const userInfo = req.body;

  db.query(checkUserInfo, userInfo.username, (err, results) => {
    if (err) return res.cc(err.message);
    if (results.length !== 1) return res.cc(msg.login);
    // 对比用户输入的密码是否和数据库的密码一致
    const compareResults = bcrypt.compareSync(
      userInfo.password,
      results[0].password
    );
    // 密码错误判断
    if (!compareResults) return res.cc(msg.loginPas);
    // 密码成功，生产jwt token
    const user = { ...results[0], password: "", user_pic: "" };
    const tokenStr = jwt.sign(user, secret, { expiresIn: "10h" });
    return res.send({
      status: 200,
      msg: msg.login,
      token: "Bearer " + tokenStr,
    });
  });
};
