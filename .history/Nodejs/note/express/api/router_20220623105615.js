const express = require("express");
const router = express.Router();

router.get("/get", (req, res) => {
  const body = req.body;
  res.send({
    statue: 0,
    msg: "get请求成功",
    data: body,
  });
});

module.exports = router;