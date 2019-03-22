'use strict'

let express = require('express')
let app = express()

const newLocal = './mainRoutes'
let mainRouter = require(newLocal)

app.use(mainRouter)

app.listen(3000)
console.log('Express server running on port 3000')
