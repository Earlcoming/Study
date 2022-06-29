const path = require("path");
const db = require(path.join(process.cwd(), "/db"));
const { getArticleCates } = require(path.join(process.cwd(), "global/sql"));
const {msg} = require(path.join(process.cwd(), "global/msg"));
exports.articleCates = (req, res) => {
  res.cc("ok");
  db.query(getArticleCates,(err, results) => {
    if(err)
  });
};
