const express = require("express");
const path = require("path");
const router = express.Router();

const {
  addArticle
} = require("./handler");
const expressJoi = require("@escook/express-joi");

// 验证规则
const {
  cates_schema,
  delete_cate_schema,
  updateCate_schema,
} = require(path.join(process.cwd(), "global/schema"));
router.get("/cates", articleCates);
router.post("/addcates", expressJoi(cates_schema), addCates);
router.get("/deletecate/:id", expressJoi(delete_cate_schema), deleteCate);
router.get("/cates/:id", expressJoi(delete_cate_schema), getCate);
router.post("/updatecate", expressJoi(updateCate_schema), updatecate);

module.exports = router;
