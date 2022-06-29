exports.addArticle = (req, res) => {
  console.log("返回数据", req, req.file);
  console.log("--------------------");
  res.send({
    status: 200,
    msg: "添加文章OK",
    data: req.body,
  });
};
