const express = require('express')

const app = express()

app.get('/user', (req, res) =>{
  const query = req.query
  const params = req.params;
  console.log(query.name);
  console.log(params)
  res.send({name: '伯爵', age: 18})
})

app.get('/user:id', (req, res) =>{
  const params = req.params;
  console.log(query.name);
  console.log(params)
  res.send({name: '伯爵', age: 18})
})

app.post('/user', (req,res) => {
  res.send({name: 'post', sex: '男'})
})

app.listen(3000, () =>{
  console.log('express server starting http://localhost:3000');
})