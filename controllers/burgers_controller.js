//routes and instructions
//dependencies
const burger = require('../models/burger.js')
const express = require('express');

//set up router
const router = express.Router()

//routes for server

//get route and load page
router.get('/', (req, res) => {
    burger.selectAll((rows) => {
        burgerData = rows.map(({id, burger_name, devoured}) =>{
            return {id, burger_name, devoured}
        })
        console.log(burgerData)
        res.render('index', {burgerData})
    })
})

//post route and create new burger
router.post('/api/burgers', (req, res) => {
    burger.insertOne(req.body.burger_name, req.body.devoured, () => res.redirect('/'))
})

//put route and change burger to eaten
router.put('/api/burgers/:id', (req, res) => {
    const condition = req.params.id;
    burger.updateOne(`id = ${condition}`, result => {
        if(result.changedRows === 0) {
            return res.status(404).end();
        }
        res.status(200).end();
    })
})

module.exports = router;