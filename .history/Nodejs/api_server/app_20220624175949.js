const express = require("express");
const cors = require('cors')
const app = express();


// 配置公共
app.use(express.urlencoded({extended: }))
app.use(cors())
app.listen(3000, () => {
  console.log("api server http://localhost:3000");
});
