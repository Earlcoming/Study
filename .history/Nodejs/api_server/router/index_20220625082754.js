const express = require("express");
const router = express.Router();

router.post('/reguser', (req, res) => {

  res.send('reguser OK')
})


module.exports = router