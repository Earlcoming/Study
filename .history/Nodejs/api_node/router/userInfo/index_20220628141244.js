const express = require("express");
const router = express.Router();

const userInfo = require("./handler");
router.get("/userInfo", userInfo);

module.exports = router;
