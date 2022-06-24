const http = require("http");
const serve = http.createServer((req, res) => {
  console.log("req", req);
  console.log("res", res);
});

export default serve;
