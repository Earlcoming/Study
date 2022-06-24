const express = require("express");
const cors = require("cors");
const app = express();

// 配置公共
app.use(cors());
// form表单解析配置
app.use(express.urlencoded({ extended: false }));

app.listen(3000, () => {
  console.log("api server http://localhost:3000");
});
