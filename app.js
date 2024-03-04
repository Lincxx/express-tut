const express = require('express')
const app = express()
let {people} = require('./data')

//static assets
app.use(express.static('./methods-public'))
//to get form data - parse form data
app.use(express.urlencoded({extended:false}))
//parse json - to get json form form data
app.use(express.json())

app.get('/api/people',  (req, res) => {
    res.status(200).json({success: true, data: people})
})

app.post('/api/people', (req, res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success:false,msg:"please provide name value"})
    }
    //return 201, for a POST request that was successful
    res.status(201).json({success:true, person:name})
})

app.post('/api/postman/people', (req, res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success:false,msg:"please provide name value"})
    }

    res.status(201).json({success:true, data:[...people, name]})
})

app.post('/login', (req, res) => {
    const {name}  = req.body
    if (name) {
        return res.status(200).send(`Welcome: ${name}`)
    }
    return res.status(401).send("please send credentials")

})

//PUT - updating data
app.put('/api/people/:id', (req, res)=>{
    const {id} = req.params
    const {name} = req.body
    if(!id) {
        return res.status(400).json({success:false,msg:"no person found"})
    }

    //find
    const person = people.find((person) => person.id === Number(id))
    console.log(person)

    if(!person) {
        return res.status(404).json({success:false,msg:"no person found"})
    }

    //update
    const newPeople = people.map(person => {
        if (person.id === Number(id)) {
            person.name = name
        }
        return person
    })

    return res.status(200).json({success:true,date:newPeople})
})

app.delete('/api/people/:id', (req, res) => {
    const {id} = req.params
    if(!id) {
        return res.status(400).json({success:false,msg:"must enter in a valid id "})
    }

    //find
    const person = people.find((person) => person.id === Number(id))

    if(!person) {
        return res.status(404).json({success:false,msg:"no person found"})
    }

    //delete person
    const newPeople = people.filter((person) => person.id !== Number(id))

    return res.status(200).json({success:true,date:newPeople})
})

app.listen(5000, () => {
    console.log('Server up')
})