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
  // 根据id查询用户是否存在
  db.query(selectPass, req.auth.id, (err, results) => {
    if (err) return res.cc(err.message);
    if (results.length < 1) return res.cc(msg.userErr);
    console.log(results, req.body.oldPass);
    // 验证旧密码和数据库密码s
    const comparePass = bcrypt.compareSync(
      req.body.oldPass,
      results[0].password
    );
    if (!comparePass) return res.cc(msg.userUpdatePas);
    res.cc("ok");
  });

  // 用户存在，判断用户新密码是否和旧密码一致，一致不更新
  // const newPass = bcrypt.hashSync(req.body.newPass, 10);
  // db.query(updatePass, [newPass, req.auth.id], (err, results) => {
  //   if (err) return res.cc(err.message);
  //   if (results.affectedRows !== 1) return res.cc(msg.error);
  //   console.log(results);
  //   const comparePass = bcrypt.compareSync(
  //     req.body.oldPass,
  //     results[0].password
  //   );
  //   if (!comparePass) return res.cc(msg.userUpdatePas);
  //   res.cc(msg.update, 200);
  // });
};
