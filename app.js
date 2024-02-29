const express = require('express')

//now we invoke express and save it to a var
const app = express()


app.listen(5000, () => {
    console.log('server is listening on port 5000')
})

// methods we are going to use the most
// app.get
// app.post
// app.delete
// app.all
// app.use - used for middleware
// app.listen
