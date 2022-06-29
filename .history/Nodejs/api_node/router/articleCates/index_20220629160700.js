const express = require("express");
const path = require("path");
const router = express.Router();

const { articleCates, addCates } = require("./handler");
const expressJoi = require("@escook/express-joi");

const { cates_schema } = require(path.join(process.cwd(), "global/schema"));
router.get("/cates", articleCates);
router.post("/addcates", expressJoi(cates_schema), addCates);
router.get('/deleteCate'. deleteCate)

module.exports = router;
