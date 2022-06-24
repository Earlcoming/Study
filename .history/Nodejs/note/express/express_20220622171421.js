const express = require('express')

const app = express()

app.get('/user', (req, res) =>{
  const query = req.query
  console.log(query.name);
  res.send({name: '伯爵', age: 18})
})

app.get('/user/:id/:name', (req, res) =>{
  const params = req.params;
  console.log('我是id',params)
  res.send(params)
})

app.post('/user', (req,res) => {
  res.send({name: 'post', sex: '男'})
})

app.listen(3000, () =>{
  console.log('express server starting http://localhost:3000');
})