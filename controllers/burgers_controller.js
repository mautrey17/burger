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

router.post('/api/burgers', (req, res) => {
    burger.insertOne(req.body.burger_name, req.body.devoured, () => res.redirect('/'))
})

router.put('/api/burgers/:id', (req, res) => {
    res.end()
})

module.exports = router;