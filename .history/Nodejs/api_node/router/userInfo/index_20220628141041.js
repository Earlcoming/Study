const express = require("express");
const router = express.Router();

const userInfo = require('./')
router.get("/my");

module.exports = router;
