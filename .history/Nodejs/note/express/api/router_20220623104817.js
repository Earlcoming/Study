const express = require('express')
const router = express.Router();

router.get('/get', (req,res) => {
  req.query
})

module.exports = router