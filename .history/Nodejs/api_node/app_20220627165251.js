const express = require("express");
const parser = require("body-parser");
const app = express();

app.use()

// 注册路由
const userRouter = require("./router/user");
app.use("/api", userRouter);

app.listen(3000, () => {
  console.log("node start http://localhost:3000");
});
