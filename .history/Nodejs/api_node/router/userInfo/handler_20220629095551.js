// const express = require('express')
const path = require("path");
const msg = require(path.join(process.cwd(), "global/msg.js"));
const { selectUserInfo } = require(path.join(process.cwd(), "global/sql.js"));
const db = require(path.join(process.cwd(), "db/"));

// 获取用户基本信息
exports.userInfo = (req, res) => {
  console.log("object", req.auth, req);
  res.send("aaa");
  // db.query(selectUserInfo, req.user.id, (err, results) => {
  //   if (err) return res.cc(err.message);
  //   if (results.length !== 1) return res.cc("获取信息失败");
  // });
};

// 更新用户基本信息
exports.updateUserInfo = (req, res) => {
  res.send("ok");
};
