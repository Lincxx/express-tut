const express = require('express')
const app = express()

const {products} = require('./data')

app.get('/', (req, res) => {
    res.send('<h1>Home Page</h1><a href="/api/products">Products</a>')
})

app.get('/api/products', (req, res) => {
    const newProduct = products.map((product) => {
        const {id, name, image} = product
        return {id, name, image}
    })
    res.json(newProduct)
})

app.get('/api/products/:productId', (req, res) => {
    const {productId} = req.params
    const singleProduct = products.find((product) => product.id === Number(productId))
    if(!singleProduct) {
        return res.status(404).send('Product does not exist!')
    }
    res.json(singleProduct)
})



app.listen(5000, () => {
    console.log('Server up')
})