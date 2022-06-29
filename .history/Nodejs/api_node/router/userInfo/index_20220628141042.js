const express = require("express");
const router = express.Router();

const userInfo = require('./handler')
router.get("/my");

module.exports = router;
