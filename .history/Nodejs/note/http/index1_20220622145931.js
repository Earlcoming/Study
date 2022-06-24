const http = require('http')

http.createServer((req, res) => {
  var urlObj = url.parse(res.url)
  switch(){
   }
  res.end()
}).listen(3000, ()=>{
  console.log('server start http://localhost:3000')
})

