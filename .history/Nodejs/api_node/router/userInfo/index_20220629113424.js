const express = require("express");
const path = require("path");
const router = express.Router();
const expressJoi = require("@escook/express-joi");

const { userInfo_schema, update_password_schema } = require(path.join(
  process.cwd(),
  "global/schema"
));

const { userInfo, updateUserInfo, updatePassword } = require("./handler");
router.get("/userInfo", userInfo);
router.post("/userInfo", expressJoi(userInfo_schema), updateUserInfo);
router.post(
  "/updatePassword",
  expressJoi(update_password_schema),
  updatePassword
);

exports.post('/update/avator', update )

module.exports = router;
