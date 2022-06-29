const express = require("express");
const path = require("path");
const router = express.Router();

const { articleCates, addCates, deleteCate, getCate } = require("./handler");
const expressJoi = require("@escook/express-joi");

// 验证规则
const { cates_schema, delete_cate, updateCate_schema } = require(path.join(
  process.cwd(),
  "global/schema"
));
router.get("/cates", articleCates);
router.post("/addcates", expressJoi(cates_schema), addCates);
router.get("/deletecate/:id", expressJoi(delete_cate), deleteCate);
router.get("/cates/:id", expressJoi(delete_cate), getCate);
router.post("/updatecate", expressJoi(updateCate_schema), getCate);

module.exports = router;
