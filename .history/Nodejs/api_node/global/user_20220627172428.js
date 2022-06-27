module.exports.resSuccess = (req, res, next) => {
  res.success = (msg, status) => {
    res.send({
      status: 200,
      msg,
    });
  };
  res.err = (msg)
  next();
};
