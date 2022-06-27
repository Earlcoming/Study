module.exports.resSuccess = (req, res, next) => {
  res.success = (msg) => {
    res.send({
      status: 200,
      msg,
    });
  };
  res.err = (401)
  next();
};
