// const express = require('express')
const path = require("path");
const msg = require(path.join(process.cwd(), "global/msg.js"));
const {
  selectUserInfo,
  updateUserInfo,
  selectPass,
  updatePass,
} = require(path.join(process.cwd(), "global/sql.js"));
const db = require(path.join(process.cwd(), "db/"));
const bcrypt = require("bcryptjs");

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
  db.query(updateUserInfo, [req.body, req.body.id], (err, results) => {
    console.log("results", results);
    if (err) return res.cc(err.message);
    // 执行update语句，results有一个affectedRows属性
    if (results.affectedRows !== 1) return res.cc(msg.error);
    res.send({
      status: 200,
      msg: msg.update,
      data: results[0],
    });
  });
};

// 修改密码
exports.updatePassword = (req, res) => {
  db.query(selectPass, req.auth.id, (err, results) => {
    if (err) return res.cc(err.message);
    if (results.length < 1) return res.cc(msg.userErr);
  });

  const newPass = bcrypt.hashSync(req.body.newPass, 10);
  db.query(updatePass, [newPass, req.auth.id], (err, results) => {
    console.log(err);
    if (err) return res.cc(err.message);
    if (results.affectedRows !== 1) return res.cc(msg.error);
    // 判断原密码是否正确
    console.log(results[0]);
    const comparePass = bcrypt.compareSync(
      req.body.oldPass,
      results[0].password
    );
    // if (!comparePass) return res.cc(msg.userUpdatePas);
    // res.cc(msg.update, 200);
  });
};
