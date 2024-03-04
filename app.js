const express = require('express')
const app = express()

const people = require('./routes/people')
const auth = require('./routes/auth')

//static assets
app.use(express.static('./methods-public'))
//to get form data - parse form data
app.use(express.urlencoded({extended:false}))
//parse json - to get json form form data
app.use(express.json())

//router - people path - set the base route
app.use('/api/people', people)
//router - login
app.use('/login', auth)





app.listen(5000, () => {
    console.log('Server up')
})