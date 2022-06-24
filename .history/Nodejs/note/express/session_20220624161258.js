const session = require('express-session')
const express = require('express')
const app = express()

app.use(session({
  secret: 'earl',
  resave: false,
  saveUninitialized: true
}))

app.post('/api/')

app.listen(3000, () => {
  console.log('express serve start http://localhost:3000');
})