const parser = require("body-parser");

const express = require("express");

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.post("/user", (req, res) => {
  co
  console.log(req.body);
  res.send("ok");
});

app.listen(3000);
