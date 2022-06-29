const express = require("express");
const router = express.Router();

const { articleCates, addCates } = require("./handler");
const expressJoi = require("@escook/express-joi");

const {
  userInfo_schema,
  update_password_schema,
  avator_schema,
} = require(path.join(process.cwd(), "global/schema"));
router.get("/article/cates", articleCates);
router.get("/article/cates", expressJoi(),addCates);

module.exports = router;
