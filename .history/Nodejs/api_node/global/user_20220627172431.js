module.exports.resSuccess = (req, res, next) => {
  res.success = (msg, status = 401) => {
    res.send({
      status: 200,
      msg,
    });
  };
  res.err = (msg)
  next();
};
