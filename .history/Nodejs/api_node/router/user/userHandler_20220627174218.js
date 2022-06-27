const path = require("path");
const msg = require(path.join(process.cwd(), "global/msg.js"));

module.exports.reguser = (req, res) => {
  const userInfo = req.body;
  console.log(userInfo);
  if(!userInfo.username || !userInfo.password)

  res.cc(msg.reg, 200);
};
