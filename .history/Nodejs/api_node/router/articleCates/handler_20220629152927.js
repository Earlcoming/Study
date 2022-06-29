const path = require("path");
const db = require(path.join(process.cwd(), "/db"));
const { getArticleCates } = require(path.join(process.cwd(), "global/sql"));
const { msg } = require(path.join(process.cwd(), "global/msg"));
exports.articleCates = (req, res) => {
  db.query(getArticleCates, (err, results) => {
    if (err) return res.cc(err.message);
    console.log(results);
    if(results.length===0) return 
  });
  res.cc("ok");
};
