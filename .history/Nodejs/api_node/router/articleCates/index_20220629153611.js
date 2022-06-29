const express = require("express");
const router = express.Router();

const { articleCates,addCates } = require("./handler");

router.get("/article/cates", articleCates);
router.get("/article/cates", articleCates);

module.exports = router;
