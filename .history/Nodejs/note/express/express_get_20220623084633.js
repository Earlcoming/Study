const express = require('express')
const app = express()

app.get('/',(req, res) => {
  res.send('hello World')
})

app.post('/', (req, res) => {
  res.send('Post send')
})

app.listen('3000', () => {
  console.log('start server localhost:3000');
})