'use strict'

let express = require('express')
let app = express()

const newLocal = './mainRoutes'
let mainRouter = require(newLocal)

app.use(mainRouter)

let port = process.env.PORT || 3000

app.listen(port)
console.log('Express server running on port', port)
