const http = require('http')
const url = require('url')

http.createServer((req, res) => {
  var urlObj = url.parse(res.url)
  switch(urlObj){
   }
  res.end()
}).listen(3000, ()=>{
  console.log('server start http://localhost:3000')
})

