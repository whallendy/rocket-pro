var express = require('express');
var router = express.Router();

var skills = require('../public/javascripts/skills.js');
var goals = require('../public/javascripts/goals.js');

router.get('/', function(req, res) {
    var skillsResult = skills.getSkills();
    var goalsResult = goals.getGoals();
    res.render('stats',{
        user_name : skillsResult[0].user_name,
        reward_level : skillsResult[0].season_rewards.level,
        skills : skillsResult[0].player_skills,
        goals : goalsResult[0].value
    });
});

module.exports = router;
