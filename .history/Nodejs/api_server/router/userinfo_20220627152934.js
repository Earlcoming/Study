const express = require("express");
const router = express.Router();

router.get("/userinfo", (req, res) => {
  res.send("ok");
});
