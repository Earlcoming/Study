const express = require('expresss')

const cors = require('cors')

const app = express()

// 允许跨域 不兼容ie
app.use(cors())


