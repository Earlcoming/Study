const parser = require("body-parser");

const express = require("express");

const app = express();

app.use(parser.json());
app.use(parser.urlencoded({ extended: true }));

app.post("/user", (req, res) => {
  const body = req.body;
  console.log(body.bookname);
  res.send("ok");
});

app.listen(3000);
