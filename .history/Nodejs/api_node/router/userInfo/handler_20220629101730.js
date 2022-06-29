// const express = require('express')
const path = require("path");
const msg = require(path.join(process.cwd(), "global/msg.js"));
const { selectUserInfo } = require(path.join(process.cwd(), "global/sql.js"));
const db = require(path.join(process.cwd(), "db/"));

// 获取用户基本信息
exports.userInfo = (req, res) => {
  db.query(selectUserInfo, req.auth.id, (err, results) => {
    if (err) return res.cc(err.message);
    if (results.length !== 1) return res.cc("获取信息失败");
    res.send({
      status: 200,
      msg: "获取信息成功",
      data: results[0],
    });
  });
};

// 更新用户基本信息
exports.updateUserInfo = (req, res) => {
  const body = req.body;
  res.send("ok");
};
