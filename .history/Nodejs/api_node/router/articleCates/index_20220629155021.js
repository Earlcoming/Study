const express = require("express");
const path = require("path");
const router = express.Router();

const { articleCates, addCates } = require("./handler");
const expressJoi = require("@escook/express-joi");

const { cates_schema } = require(path.join(process.cwd(), "global/schema"));
router.get("/cates", articleCates);
// expressJoi(cates_schema),
router.post("/addcates", addCates);

module.exports = router;
