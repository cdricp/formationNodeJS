var express = require('express')
var app = express()

app.get('/', function (req, res) {
  res.send('Hello World')
}).get('/fr', function (req, res) {
  res.send('Bonjour monde')
})

app.listen(8081, () => {
  console.log('Express app running on 8081')
})
