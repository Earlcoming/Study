const express = require('expresss')

const cors = require('cors')

const app = express()

// 允许跨域 不兼容ie10以下浏览器
app.use(cors())


