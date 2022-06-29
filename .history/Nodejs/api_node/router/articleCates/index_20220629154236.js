const express = require("express");
const path = require("path");
const router = express.Router();

const { articleCates, addCates } = require("./handler");
const expressJoi = require("@escook/express-joi");

const { cates_schema } = require(path.join(process.cwd(), "global/schema"));
router.get("/article/cates", articleCates);
router.get("/article/cates", expressJoi(cates_schema), addCates);

module.exports = router;
