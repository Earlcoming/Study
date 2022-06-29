// const express = require('express')
const path = require("path");
const msg = require(path.join(process.cwd(), "global/msg.js"));
const { selectUserInfo } = require(path.join(process.cwd(), "global/sql.js"));
const db = require(path.join(process.cwd(), "db/"));

exports.userInfo = (req, res) => {
  console.log("object", req.user);
  res.send("aaa");
  db.query(selectUserInfo, req.user.id, (err, results) => {
    if(err) return res.cc(err.message)
    
  });
};
