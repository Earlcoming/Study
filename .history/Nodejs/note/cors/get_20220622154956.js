const http = require("http");
const url = require("url");

http
  .createServer((req, res) => {
    res.writeHead(200, {
      "Content-Type": "application/json;charset=utf-8",
      "access-control-allow-origin": "*", // 配置跨域，所有域都可以获取数据
    });
    var urlObj = url.parse(req.url);
    switch (urlObj.pathname) {
      case "/api/aaa":
        // 客户端 去猫眼要数据
        break;
      default:
        res.end("404");
    }
    res.end();
  })
  .listen(3000, () => {
    console.log("server start http://localhost:3000");
  });


  function httpGet() {
    
  }