const session = require('express-session')
const express = require('express')
const app = express()

app.use(session({
  secret: 'earl',
  resave: false,
  saveUninitialized: true
}))

app.post('/api/login', (req, res) => {
  console.log(res.body);
  if(req.body.username === 'admin' && req.body.password === '123456'){
    return res.send({status: 1, msg: '登录失败'})
  }
  req.session.user = req.body
  req.session.isLogin = true;
  res.send({statue: 0, msg: '登录成功', userinfo: req.session.user})
})

app.get('/api/username')

app.listen(3000, () => {
  console.log('express serve start http://localhost:3000');
})