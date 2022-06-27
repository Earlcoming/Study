const db = require("../db/index");

// 注册
exports.regUser = (req, res) => {
  const userInfo = req.body;
  if (!userInfo.username || !userInfo.password) {
    return res.send({
      status: 1,
      msg: "用户名或密码不能为空!",
    });
  }

  const sql = "select * from ev_users where username=?";

  db.query(sql, [userInfo.username], (err, results) => {
    if (err) {
      return res.send({
        status: 1,
        msg: err.message,
      });
    }
    
    
  });

  res.send("reguser OK");
};

// 登录
exports.login = (req, res) => {
  res.send("login OK");
};
