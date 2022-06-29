const express = require("express");
const router = express.Router();

const { articleCates } = require("./handler");

router.get("/article/cates", articleCates);

module.exports = router;
