const path = require("path");
const db = require(path.join(process.cwd(), "/db"));
const { getArticleCates } = require(path.join(process.cwd(), "global/sql"));
const { msg } = require(path.join(process.cwd(), "global/msg"));
exports.articleCates = (req, res) => {
  db.query(getArticleCates, (err, results) => {
    if (err) return res.cc(err.message);
    if (results.length === 0) return res.cc(msg.error);
    res.send({
      status: 200,
      msg: msg.getCates
      data: results
    })
  });
  res.cc(msg.getCates, 200);
};
