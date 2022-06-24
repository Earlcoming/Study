const express = require('express')

const app = express()

app.get('/user', (req, res) =>{
  res.send({name: })
})

app.listen(3000, () =>{
  console.log('express server starting http://localhost:3000');
})