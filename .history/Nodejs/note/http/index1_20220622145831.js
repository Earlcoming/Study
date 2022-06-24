const http = require('http')

http.createServer((req, res) => {

  res.end()
})

http.listen(3000, ()=>{
  console.log('server start http://localhost:8080')
})

