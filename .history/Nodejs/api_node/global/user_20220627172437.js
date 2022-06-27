module.exports.resSuccess = (req, res, next) => {
  res.c = (msg, status = 401) => {
    res.send({
      status,
      msg,
    });
  };
  next();
};
