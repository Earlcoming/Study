const express = require("express");
const router = express.Router();

const { userInfo, updateUserInfo } = require("./handler");
router.get("/userInfo", userInfo);
router.get("/userInfo", updateUserInfo);

module.exports = router;
