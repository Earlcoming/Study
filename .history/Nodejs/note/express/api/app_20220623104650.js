const express = require("express");
const app = express();
const 

const router = require("./router");

app.use("/api", router);

app.listen(3000, () => {
  console.log("start server at http://localhost:3000/");
});