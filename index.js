const express = require('express')
const mongoose  = require('mongoose')
const morgan = require('morgan')
const bodyParser =  require('body-parser')
const methodOverride = require("method-override")
const router = require('./app/express')


const app =  express()
const config = require('config')

if (process.env.NODE_ENV !== 'test')
    app.use(morgan('combined'))
app.use(bodyParser.urlencoded({extended:  true}))
app.use(bodyParser.json())
app.use(bodyParser.json({type: 'application/vnd.api+json'}))
app.use(methodOverride())
app.use('/api', router)

mongoose.connect(config.db)

mongoose.connection.on('connected', () => {
    console.log('Mongoose connected to: ' + config.db)
})

app.listen(config.port,  function (err) {
    if (err)
        throw err
    console.log("app listening on port " + config.port)
})


module.exports  = app