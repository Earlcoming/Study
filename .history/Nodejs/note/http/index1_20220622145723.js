const http = require('http')


http.createServer((req, res) => {

  res.end()
})

http.listen(8080, ()=>{
  console.log('server start http://localhost:8080')
})

