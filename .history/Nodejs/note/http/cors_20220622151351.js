const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {

    res.writeHead(200, {'Content-Type:'})
    var urlObj = url.parse(req.url);
    switch (urlObj.pathname) {
      case "/api/aaa":
        res.end(
          JSON.stringify([{
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
