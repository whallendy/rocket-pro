var express = require('express');
var router = express.Router();

var goals = require('../public/javascripts/goals.js')

router.get('/', function(req, res) {
    res.render('stats',{
        goals : goals
    });
});

module.exports = router;
