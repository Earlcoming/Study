const express = require("express");
const os = require("os");
const router = express.Router();

const app = express();

router.get("/index", (req, res) => {
  res.json({
    code: 200,
    message: "xmzs",
    list: os.cpus(),
  });
});
app.use(router);

app.listen(3333, () => {
  console.log("server start http://localhost:3333/");
});
