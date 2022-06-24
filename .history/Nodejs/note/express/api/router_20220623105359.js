const express = require("express");
const router = express.Router();

router.get("/get", (req, res) => {
  const query = req.query;
  const body = req.body;
  console.log(query);
  res.send({
    statue: 0,
    msg: "get请求成功",
    data: query || body,
  });
});

module.exports = router;
