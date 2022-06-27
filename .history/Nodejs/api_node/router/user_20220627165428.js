const express = require("express");
const router = express.Router();

router.post("/reguser", (req, res) => {
  res.sendResult({
    status: 200,
    
  })
});

module.exports = router;
