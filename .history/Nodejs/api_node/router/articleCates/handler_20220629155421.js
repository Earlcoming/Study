const path = require("path");
const db = require(path.join(process.cwd(), "/db"));
const { getArticleCates,getArticleCatesId } = require(path.join(process.cwd(), "global/sql"));
const msg = require(path.join(process.cwd(), "global/msg"));

// 获取所有文章分类
exports.articleCates = (req, res) => {
  db.query(getArticleCates, (err, results) => {
    if (err) return res.cc(err.message);
    if (results.length === 0) return res.cc(msg.error);
    res.send({
      status: 200,
      msg: msg.getCates,
      data: results,
    });
  });
};

// 新增文章分类
exports.addCates = (req, res) => {
  clg(re)
  db.query(getArticleCatesId, )
  res.send("OK");
};