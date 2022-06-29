const express = require("express");
const router = express.Router();

const userinfo = require('./handler')
router.get("/userinfo", userinfo);

module.exports = router;
