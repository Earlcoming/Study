const express = require("express");
const router = express.Router();

router.get("/get", (req, res) => {
  const query = req.query;
  console.log(query);
  res.send({
    status: 200,
    
  })
  
});

module.exports = router;
