const express = require('express')
const app = express()
const logger = require('./logger')
const authorize = require('./authorize')

//middleware is everywhere in express apps. One could argue, that express apps are nothing but middleware
//pattern
// req => middleware => res

//app.use is invoking the logger, remember order matters keep above the routes.
//app.use('/api',logger)
//with the /api - this will apply the middleware to the api routes only

// 1. app.use vs route
// 2. options - our own / express / 3rd party

//to use multiple middleware. we must put them into an array, they run in order
app.use([logger, authorize])

app.get('/',  (req, res) => {

    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {

    res.send('Products')
})

// app.get('/api/items', (req, res) => {
//     console.log(req.user)
//     res.send('Items')
// })

//we can inject the middleware
// app.get('/api/items', [logger, authorize], (req, res) => {
//     console.log(req.user)
//     res.send('Items')
// })

app.listen(5000, () => {
    console.log('Server up')
})