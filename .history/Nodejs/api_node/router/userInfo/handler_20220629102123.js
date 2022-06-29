// const express = require('express')
const path = require("path");
const msg = require(path.join(process.cwd(), "global/msg.js"));
const { selectUserInfo, updateUserInfo } = require(path.join(
  process.cwd(),
  "global/sql.js"
));
const db = require(path.join(process.cwd(), "db/"));

// 获取用户基本信息
exports.userInfo = (req, res) => {
  db.query(selectUserInfo, req.auth.id, (err, results) => {
    if (err) return res.cc(err.message);
    if (results.length !== 1) return res.cc(msg.error);
    res.send({
      status: 200,
      msg: msg.userInfo,
      data: results[0],
    });
  });
};

// 更新用户基本信息
exports.updateUserInfo = (req, res) => {
  const body = req.body;
  db.query(updateUserInfo, { id: body.id }, (err, results) => {
    if (err) return res.cc(err.message);
    if (results.length !== 1) return res.cc(msg.error);
    res.send({
      status: 200,
      msg: msg.update,
      data: results[0],
    });
  });
  res.send("ok");
};