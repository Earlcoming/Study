const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const app = express();

// 注册json传参
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

// 注册跨域
app.use(cors());

// 注册路由
const userRouter = require("./router/user");
app.use("/api", userRouter);

app.use((err,req,res,next) => {
  res.suc = (req,res)
})

app.listen(3000, () => {
  console.log("node start http://localhost:3000");
});