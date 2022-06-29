const express = require("express");
const parser = require("body-parser");
const cors = require("cors");
const path = require("path");
const app = express();
const { expressjwt: expressJWT } = require("express-jwt");

// 注册json传参
app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

// 注册跨域
app.use(cors());

// 注册全局成功回调函数
const { resCC } = require("./global/user");
app.use(resCC);

// 注册路由
const userRouter = require("./router/user");
app.use("/api", userRouter);

// 注册全局错误提示
const joi = require("joi");
app.use((err, req, res, next) => {
  if (err instanceof joi.ValidationError) return res.cc(err);
  res.cc(err);
  next();
});

//配置token检测中间件,除了api开头的接口都需要提交token
const { secret } = require(path.join(process.cwd(), "/global/secret"));
app.use(
  expressJWT({ secret, algorithms: ["HS256"] }).unless({
    path: [/^\/api\//],
  })
);

// token错误的中间件
app.use((err,req,res,next) => {
  if()
})

app.listen(3000, () => {
  console.log("node start http://localhost:3000");
});
