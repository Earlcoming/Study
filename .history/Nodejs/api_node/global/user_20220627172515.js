module.exports.resCC = (req, res, next) => {
  res.cc = (msg = "请求失败", status = 401) => {
    res.send({
      status,
      msg,
    });
  };
  next();
};
