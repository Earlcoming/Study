const session = require('express-session')
const express = require('express')
const app = express()

app.use(session({
  secret: 'earl',
  resave: false,
  saveUninitialized: true
}))

app.use(express.urlencoded({extended: false}))

app.post('/api/login', (req, res) => {
  console.log(req.query);
  if(req.query.username !== 'admin' && req.query.password !== '123456'){
    return res.send({status: 1, msg: '登录失败'})
  }
  req.session.user = req.query
  req.session.isLogin = true;
  res.send({statue: 0, msg: '登录成功', userinfo: req.session.user})
})

app.get('/api/username', (req,res) => {
  if(!req.session.isLogin) {
    return res.send({statue: 1, msg: '未来登录'})
  }
  // res.send({statue: 1, msg: '未登录', data: req.session.user.username})
})

app.listen(3000, () => {
  console.log('express serve start http://localhost:3000');
})