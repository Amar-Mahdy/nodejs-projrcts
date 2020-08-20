const express = require('express')
const app = express()
const router = require('./config/router')


app.use(express.static('public'))
app.use(express.urlencoded({extended:true}))
app.set('view engine','ejs')

// require mongoose
require('./config/mongoose')

// require router
app.use(router)
//listen to the server
app.listen(3000);

