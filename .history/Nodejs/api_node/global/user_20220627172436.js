module.exports.resSuccess = (req, res, next) => {
  res.success = (msg, status = 401) => {
    res.send({
      status,
      msg,
    });
  };
  next();
};
