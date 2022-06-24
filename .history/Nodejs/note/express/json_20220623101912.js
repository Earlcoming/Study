const express = require("express");

const app = express();

app.use(app.json());

app.post("/user", (req, res) => {
  console.log(req.body);
  res.send("ok");
});

app.listen("3000", () => {
  console.log("json start http://localhost:3000/");
});
