const express = require("express");
const router = express.Router();

router.post("/reguser", (req, res) => {
  res.sendResult()
});

module.exports = router;
