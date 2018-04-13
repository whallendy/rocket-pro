var express = require('express');
var router = express.Router();

var goals = require('../public/javascripts/goals.js');

router.get('/', function(req, res) {
    var result= goals.getGoals();
    res.render('stats',{
        goals : result
    });
});

module.exports = router;
