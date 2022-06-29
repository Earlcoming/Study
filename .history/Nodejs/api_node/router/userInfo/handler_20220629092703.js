// const express = require('express')
const path = require("path");
const msg = require(path.join(process.cwd(), "global/msg.js"));

exports.userInfo = (req, res) => {
  console.log("object", req);
};
