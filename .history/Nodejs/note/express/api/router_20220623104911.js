const express = require("express");
const router = express.Router();

router.get("/get", (req, res) => {
  const query = req.query;
  console.log(query);
  res.send("ok");
});

module.exports = router;
