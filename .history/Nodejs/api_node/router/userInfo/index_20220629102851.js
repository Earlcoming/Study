const express = require("express");
const router = express.Router();

const {userInfo_schema = 

const { userInfo, updateUserInfo } = require("./handler");
router.get("/userInfo", userInfo);
router.post("/userInfo", updateUserInfo);

module.exports = router;
