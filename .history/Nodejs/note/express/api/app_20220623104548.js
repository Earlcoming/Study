const express = require("express");
const app = express();
const router = require('.')

app.listen(3000, () => {
  console.log("start server at http://localhost:3000/");
});
