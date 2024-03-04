const express = require('express')
const {people} = require("../data");

//router
const router = express.Router()


router.get('/',  (req, res) => {
    res.status(200).json({success: true, data: people})
})

router.post('/', (req, res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success:false,msg:"please provide name value"})
    }
    //return 201, for a POST request that was successful
    res.status(201).json({success:true, person:name})
})

router.post('/postman', (req, res) => {
    const {name} = req.body
    if(!name) {
        return res.status(400).json({success:false,msg:"please provide name value"})
    }

    res.status(201).json({success:true, data:[...people, name]})
})

//PUT - updating data
router.put('/:id', (req, res)=>{
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

router.delete('/:id', (req, res) => {
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

module.exports = router