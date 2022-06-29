const express = require("express");
const path = require("path");
const router = express.Router();

const { addArticle } = require("./handler");
const expressJoi = require("@escook/express-joi");

// 验证规则
const { cates_schema } = require(path.join(process.cwd(), "global/schema"));
router.post("/add", addArticle);
module.exports = router;
