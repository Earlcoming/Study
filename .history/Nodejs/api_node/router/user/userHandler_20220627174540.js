const path = require("path");
const msg = require(path.join(process.cwd(), "global/msg.js"));
const msg = require(path.join(process.cwd(), "global/msg.js"));

module.exports.reguser = (req, res) => {
  const userInfo = req.body;
  console.log(userInfo);
  if (!userInfo.username || !userInfo.password) {
    return res.cc(msg.user, 401);
  }

  res.cc(msg.reg, 200);
};
