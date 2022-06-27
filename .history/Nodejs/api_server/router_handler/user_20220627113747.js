/*
 $ @Author: 'Earl'
 $ @Date: 2022-06-25 08:35:10
 $ @LastEditors: 'Earl'
 $ @LastEditTime: 2022-06-27 11:36:24
 $ @FilePath: \daoqid:\Study\Nodejs\api_server\router_handler\user.js
 $ @Description: 
 */
const db = require("../db/index");
const bcrypt = require("bcryptjs");

// 注册
exports.regUser = (req, res) => {
  const userInfo = req.body;
  if (!userInfo.username || !userInfo.password) {
    return res.cc("用户名或密码不能为空!");
    // return res.send({
    //   status: 1,
    //   msg: "用户名或密码不能为空!",
    // });
  }
  const sql = "select * from ev_users where username=?";

  db.query(sql, userInfo.username, (err, results) => {
    if (err) {
      return res.cc(err.message);
      // return res.send({
      //   status: 1,
      //   msg: err.message,
      // });
    }
    if (results.length > 0) {
      return res.cc("用户名已经被占用，请更换用户名");
      // return res.send({
      //   status: 1,
      //   msg: "用户名已经被占用，请更换用户名",
      // });
    }
  });

  // 写入数据库
  userInfo.password = bcrypt.hashSync(userInfo.password, 10);
  const isSql = "insert into ev_users set ?";
  db.query(
    isSql,
    { username: userInfo.username, password: userInfo.password },
    (err, results) => {
      // 失败
      console.log(err);
      if (err) return res.cc(err);
      // return res.send({
      //   status: 1,
      //   msg: err.message,
      // });
      if (results.affectedRows !== 1) {
        return res.cc("注册失败，请稍后再试!");
      }
      return res.cc("注册成功", 200);
      // res.send({
      //   status: 200,
      //   msg: "注册成功",
      // });
    }
  );
};

// 登录
/**
 * [login description]
 *
 */
exports.login = (req, res) => {
  return 
  const userInfo = req.body;
  const sql = "select * from ev_users where username=?";
  db.query(sql, userInfo.username, (err, results) => {
    if (err) return res.cc(err);
    // 未查询到登录用户名，返回登录失败
    if (results.length === 0) {
      return res.cc("登录失败");
    }
    const compareResult = bcrypt.compareSync(
      userInfo.password,
      results[0].password
    );
    if (!compareResult) return res.cc("登录失败");
    const user = { ...results[0], password: "", user_pic: "" };
    console.log(user);
  });
};
