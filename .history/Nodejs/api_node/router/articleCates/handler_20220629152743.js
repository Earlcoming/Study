const path = require("path");
const db = require(path.join(process.cwd(), "/db"));
const {getArticleCates} = require(path.join(process.cwd))
exports.articleCates = (req, res) => {
  res.cc("ok");
  db.query()
};