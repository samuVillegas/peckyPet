const express = require('express')
const cors = require('cors');
const morgan = require('morgan');
const app = express()
const { router }  = require('./routes')

app.use(cors())
app.use(express.json())
app.use(router)
app.use(morgan('dev'))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

module.exports = { app }