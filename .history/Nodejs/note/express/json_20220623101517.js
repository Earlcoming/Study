const express = require("express");

const app = express();

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen("3000", () => {
  console.log("server start http://localhost:3000/");
});
