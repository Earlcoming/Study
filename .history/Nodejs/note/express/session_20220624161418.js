const session = require('express-session')
const express = require('express')
const app = express()

app.use(session({
  secret: 'earl',
  resave: false,
  saveUninitialized: true
}))

app.post('/api/login', (req, res) => {
  if(req.body.username === 'admin' && req.body.password === '123456'){
    return req.send({status: 1, msg: '登录失败'})
  }
  req.session.user = req.body
})

app.listen(3000, () => {
  console.log('express serve start http://localhost:3000');
})