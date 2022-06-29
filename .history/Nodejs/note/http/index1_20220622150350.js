const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    res.setHeader()
    var urlObj = url.parse(req.url);
    switch (urlObj.pathname) {
      case "/api/aaa":
        res.end(
          [{
            name: "伯爵",
            age: 18,
            sex: "男",
          }])
        );
      break;
      default:
      res.end('404')
    }
    res.end();
  })
  .listen(3000, () => {
    console.log("server start http://localhost:3000");
  });