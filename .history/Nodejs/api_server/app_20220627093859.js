const express = require("express");
const cors = require("cors");
const app = express();

const userRouter = require("./router/user");

// 配置跨域，兼容ie10+
app.use(cors());

// form表单解析配置，智能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }));

// 注册api
app.use("/api", userRouter);

// 优化代码
app.use((req))


app.listen(3000, () => {
  console.log("api server http://localhost:3000");
});
