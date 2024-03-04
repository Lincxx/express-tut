const express = require('express')
const {people} = require("../data");

//import controller
 const {getPeople, createPerson, createPersonPostman, updatePerson, deletePerson} = require('../controllers/people')

//router
const router = express.Router()

//2 ways to setup routes
//opt 1
// router.get('/',  getPeople)
//
// router.post('/', createPerson)
//
// router.post('/postman', createPersonPostman)
//
// //PUT - updating data
// router.put('/:id', updatePerson)
//
// router.delete('/:id', deletePerson)

//opt 2
router.route('/').get(getPeople).post(createPerson)
router.route('/postman').post(createPersonPostman)
router.route('/:id').put(updatePerson).delete(deletePerson)

module.exports = router