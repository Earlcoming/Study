const express = require("express");
const cors = require('cors')
const app = express();


// 配置gongg
app.use(cors())
app.listen(3000, () => {
  console.log("api server http://localhost:3000");
});
