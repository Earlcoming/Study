const express = require("express");
const cors = require("cors");
const parser = require("body-parser");
const jwt = require("jsonwebtoken");
const { expressjwt: expressJWT } = require("express-jwt");
const app = express();

// 允许跨域 不兼容ie10以下浏览器
app.use(cors());

//解析post表单数据中间件
app.use(parser.json());

app.use(parser.urlencoded({ extended: false }));

// 定义一个secret秘钥,为JWT加密解密使用
const secretKey = "itearl NO.1 ^_^";

// 注册JWT字符串解析还原成json对象\
const jwtJson = expressJWT({
  secret: secretKey,
  algorithms: ["HS256"],
}).unless({
  path: [/^\/api\//],
});
app.use(jwtJson);

// 注册token解析失败
app.use((err,req,res,next) => {
  console.log(err.name);
  if(err.name === UnauthorizedError){
    return res.send({
      status: 401,
      msg: 'token无效'
    })
  }
  
})

// 登录获取token
app.post("/api/login", (req, res) => {
  console.log(req.query);
  const userinfo = req.query;
  const tokenStr = jwt.sign({ username: userinfo.username }, secretKey, {
    // expiresIn: "48h",
    expiresIn: "3s",
  });
  res.send({
    statue: 200,
    message: "登录成功",
    token: tokenStr,
  });
});

app.get("/", (req, res) => {
  console.log(req.auth);
  res.send({
    statue: 200,
    msg: "登录成功",
    data: req.auth,
  });
});

app.listen(3000, () => {
  console.log("http://localhost:3000/");
});
