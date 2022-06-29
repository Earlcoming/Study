const path = require("path");
const db = require(path.join(process.cwd(), "/db"));

exports.articleCates = (req, res) => {
  res.cc("ok");
  db.query()
};
