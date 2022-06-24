const http = require('http')


server.createServer((req, res) => {

  res.end()
})

server.listen(8080, ()=>{
  console.log('server start http://localhost:8080')
})

