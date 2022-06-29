exports.addArticle = (req, res) => {
  console.log(req.body);
  res.send({
    status: 200,
    msg: "添加文章OK",
    data: req.body,
  });
};
