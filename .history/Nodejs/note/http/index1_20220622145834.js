const http = require('http')

http.createServer((req, res) => {

  res.end()
}).listen(3000, ()=>{
  console.log('server start http://localhost:8080')
})

