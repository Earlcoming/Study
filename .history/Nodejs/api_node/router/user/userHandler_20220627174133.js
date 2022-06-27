const path = require("path");
const msg = require(path.join(process.cwd(), "global/msg.js"));

module.exports.reguser = (req, res) => {
  const 
  res.cc(msg.reg, 200);
};
