const express = require('express')
const app = express()
const logger = require('./logger')

//middleware is everywhere in express apps. One could argue, that express apps are nothing but middleware
//pattern
// req => middleware => res

//app.use is invoking the logger, remember order matters keep above the routes.
app.use('/api',logger)
//with the /api - this will apply the middleware to the api routes only

app.get('/',  (req, res) => {

    res.send('Home')
})

app.get('/about', (req, res) => {
    res.send('About')
})

app.get('/api/products', (req, res) => {

    res.send('Products')
})

app.get('/api/items', (req, res) => {
    res.send('Items')
})

app.listen(5000, () => {
    console.log('Server up')
})