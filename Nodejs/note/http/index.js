const http = require("http");
const server = http.createServer();
const url = require("url");

// server.on("request", (req, res) => {});
// server.listen(3000, () => {});

http
  .createServer((req, res) => {
    // 浏览器参数
    // console.log("req", req);

    // 返回渲染的参数
    // console.log("res", res);
    // res.write("hello world111");
    // res.write("hello world222");
    const urls = req.url;
    if (urls === "/favicon.ico") {
      return;
    }
    urlobj = url.parse(urls, true);
    console.log("urlobj", urlobj.query); //url使用
    console.log("urname", urlobj.query.a); //url使用

    res.writeHead(200, { "content-type": "text/html; charset=utf-8" });
    res.write(`<h1>网站首页</h1>`);
    res.end("[1,2,3]");
  })
  .listen(3000, () => {
    console.log("服务启动 localhost:3000");
  });
