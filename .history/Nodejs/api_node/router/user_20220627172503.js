const express = require("express");
const router = express.Router();

router.post("/reguser", (req, res) => {
  res.cc({
    status: 200,
    msg: "成功",
  });
});

module.exports = router;
