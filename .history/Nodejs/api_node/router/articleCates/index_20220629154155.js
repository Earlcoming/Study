const express = require("express");
const router = express.Router();

const { articleCates, addCates } = require("./handler");
const expressJoi = require("@escook/express-joi");

router.get("/article/cates", articleCates);
router.get("/article/cates", expressJoi(),addCates);

module.exports = router;
