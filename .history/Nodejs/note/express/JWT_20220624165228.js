const express = require('express')
const cors = require('cors')
const parser = require('body-parser')
const jwt = require('')
const app = express()

// 允许跨域 不兼容ie10以下浏览器
app.use(cors)

//解析post表单数据中间件
app.use(parser.json())

app.use(parser.urlencoded({extended: false}))


