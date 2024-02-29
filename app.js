const express = require('express')
//we need to use the absolute path to get a file, so we will use a builtin package
const path = require('path')

//now we invoke express and save it to a var
const app = express()

//setup static and middleware
app.use(express.static('./public'))

app.get('/', (req,res) => {
    res.sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
})


app.get('*', (req, res) => {
    res.status(404).send('<h1>resource not found</h1>')
})

app.listen(5000, () => {
    console.log('server listening on port 5000...')
})

// methods we are going to use the most
// app.get
// app.post
// app.delete
// app.all - works with all of the above
// app.use - used for middleware
// app.listen
