const express = require("express");
const router = express.Router();

// 注册用户
router.post("/reguser", (req, res) => {
  res.cc("OK");
});

module.exports = router;
