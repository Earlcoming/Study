const express = require('express')
const cors = require('cors')
const parser = require('body-parser')
const jwt = require('jsonwebtoken')
const expressJWT = require('express-jwt')
const app = express()

// 允许跨域 不兼容ie10以下浏览器
app.use(cors)

//解析post表单数据中间件
app.use(parser.json())

app.use(parser.urlencoded({extended: false}))

// 定义一个secret秘钥,为JWT加密解密使用
const secretKey = 'itearl NO.1 ^_^';

app.post('/api/login',(req,res) => {
  res.send({
  })
})
const token = jwt.sign({username: userinfo.username},secretKey, {expiresIn: 60*60*24*365})





app.listen(3000, () => {
  console.log('http://localhost:3000/');
})
