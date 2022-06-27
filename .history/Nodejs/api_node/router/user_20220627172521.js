const express = require("express");
const router = express.Router();

router.post("/reguser", (req, res) => {
  res.cc("OK");
});

module.exports = router;
