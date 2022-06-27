const express = require("express");
const cors = require("cors");
const app = express();

const userRouter = require("./router/index");
app.use("/api", userRouter);

// 配置公共
app.use(cors());
// form表单解析配置，智能解析 application/x-www-form-urlencoded 格式的表单数据
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("api server http://localhost:3000");
});
