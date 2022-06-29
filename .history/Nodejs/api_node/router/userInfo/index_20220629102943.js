const express = require("express");
const path = require('path')
const router = express.Router();

const { userInfo_schema } = require(path.join(process.cwd(), 'global/schema'));
const 

const { userInfo, updateUserInfo } = require("./handler");
router.get("/userInfo", userInfo);
router.post("/userInfo", userInfo_schema,updateUserInfo);

module.exports = router;
