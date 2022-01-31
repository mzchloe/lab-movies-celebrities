// starter code in both routes/celebrities.routes.js and routes/movies.routes.js
const router = require("express").Router();

//const res = require("express/lib/response");
//our celebrity model
const Celebrity = require('../models/Celebrity.model')

// all your routes here
//CREATE celebrity route
router.get('/celebrities/create', (req, res) => {
    res.render('/celebrities/new-celebrity')
})

//SUBMIT celebrity route
router.post('/celebrities/create', async (req, res) => {
    const newCelebrity = await Celebrity.create(req.body)
    res.redirect('/celebrities')
})

module.exports = router;