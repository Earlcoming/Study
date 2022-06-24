const userRouter = require("./router");
const express = require("express");
const app = express();

app.use(userRouter);
app.listen(3000, () => {
  console.log("server start http://localhost:3000");
});
