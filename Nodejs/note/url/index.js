const url = require("url");
const http = require("http");
const server = http.createServer();

const myURL = new URL("https://a:b@測試?abc#foo");

console.log(url.format(myURL, { unicode: true }));
// server.on("request", (req, res) => {
//   const urls = req.url;
//   const myURL = new URL(urls, "http://127.0.0.1:3000");
//   if (urls === "/favicon.ico") {
//     return;
//   }

//   res.write("hello");
//   const searchParams = myURL.searchParams;
//   const all = searchParams.get("a");
//   console.log(all);
//   res.end();
// });

// server.listen(3000, () => {
//   console.log("server start");
// });
