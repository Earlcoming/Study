module.exports.resCC = (req, res, next) => {
  res.cc = (msg, status = 401) => {
    res.send({
      status,
      msg,
    });
  };
  next();
};
