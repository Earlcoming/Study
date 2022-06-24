const express = require("express");

const router = express.Router();

router.get("/", (req, res) => {
  res.send("测试测试get");
});

module.exports = router;
