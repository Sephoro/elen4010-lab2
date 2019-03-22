'use strict'

let path = require('path')
let express = require('express')
let app = express()

app.get('/', function (req, res) {
  res.send('Hello to Boikanyo, Elias and the rest of the World!')
})

app.get('/author', function (req, res) {
  res.sendFile(path.join(__dirname, 'views', 'about.html'))
})

app.listen(3000)
console.log('Express server running on port 3000')
