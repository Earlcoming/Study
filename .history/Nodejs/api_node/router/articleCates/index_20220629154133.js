const express = require("express");
const router = express.Router();

const { articleCates, addCates } = require("./handler");
const {} = require('@escook/express-joi')

router.get("/article/cates", articleCates);
router.get("/article/cates", addCates);

module.exports = router;
