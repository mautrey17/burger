//dependencies
const burger = require('../models/burger.js')
const express = require('express');

const router = express.Router()

//router will go here
router.get('/', (req, res) => {
    burger.selectAll((rows) => {
        burgerData = rows.map(({id, burger_name, devoured}) =>{
            return {id, burger_name, devoured}
        })
        console.log(burgerData)
        res.render('index', {burgerData})
    })

})

router.get('/api/burgers', (req, res) => {
    burger.selectAll(burgerData => {
        res.json(burgerData)
    })
})

router.post('/api/burgers', (req, res) => {
    res.end()
})

router.put('/api/burgers/:id', (req, res) => {
    res.end()
})

module.exports = router;