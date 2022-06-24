const userRouter = require("./router");
const express = require("express");
const app = express();
app.listen(3000, () => {
  console.log(object);
})
app.use(userRouter);
