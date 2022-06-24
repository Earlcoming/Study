const http = require("http");
const url = require("url");

const https = require("https");

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
        httpget(res);
        break;
      default:
        res.end("404");
    }
    res.end();
  })
  .listen(3000, () => {
    console.log("server start http://localhost:3000");
  });

function httpget(response) {
  var data = "";
  https.get(
    `https://i.maoyan.com/api/mmdb/movie/v3/list/hot.json?ct=%E9%87%91%E6%B9%96&ci=956&channelId=4`,
    (res) => {
      res.on("data", (chunk) => {
        data += chunk;
      });
      res.on("end", () => {
        response.end(data);
        console.log("貓眼数据");
      });
    }
  );
}
