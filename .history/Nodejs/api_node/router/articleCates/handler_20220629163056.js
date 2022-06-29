const path = require("path");
const db = require(path.join(process.cwd(), "/db"));
const {
  getArticleCates,
  getArticleCatesNameAlisa,
  addCates,
  updateCates,
  getCatesId,
} = require(path.join(process.cwd(), "global/sql"));
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
  db.query(
    getArticleCatesNameAlisa,
    [req.body.name, req.body.alisa],
    (err, results) => {
      if (err) return res.cc(err.message);
      if (results.length < 0) return res.cc(msg.error);
      if (results.length === 1 && results[0].name === req.body.name) {
        return res.cc("分类名称被占用");
      }
      if (results.length === 1 && results[0].alisa === req.body.alisa) {
        return res.cc("分类别名被占用");
      }
      db.query(
        addCates,
        { name: req.body.name, alisa: req.body.alisa },
        (err, results) => {
          if (err) return res.cc(err.message);
          if (results.length < 0) return res.cc(msg.error);
          res.cc(msg.suc, 200);
        }
      );
    }
  );
};

// 根据id删除文章分类
exports.deleteCate = (req, res) => {
  // console.log(req.params);
  db.query(updateCates, req.params.id, (err, results) => {
    if (err) return res.cc(err.message);
    if (results.affectedRows !== 1) return res.cc(msg.error);
    res.cc(msg.suc, 200);
  });
};

// 根据id获取文章分类
exports.getCate = (req, res) => {
  db.query(getCatesId, req.params.id, (err, results) => {
    if (err) return res.cc(err.message);
    if (results.affectedRows !== 1) return res.cc(msg.error);
  });
  res.send("OK");
};
