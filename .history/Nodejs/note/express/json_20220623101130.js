const express = require('express')

const app = express()

app.post('/user', (req, res) => {

    res.send('ok')
})