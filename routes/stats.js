var express = require('express');
var router = express.Router();
var promise = require('promise');

var skills = require('../public/javascripts/skills.js');
var goals = require('../public/javascripts/goals.js');
var id = require('../public/javascripts/player_id.js');

router.post('/', function(req, res) {
	console.log("Username: ", id.getPID());
	id.setPID(req.body.username);
	console.log("Username: ", id.getPID());
	var initializeSkillPromise = skills.makeRequest();
	var initializeGoalsPromise = goals.makeRequest();
	initializeSkillPromise.then(function(result){
			initializeGoalsPromise.then(function(result){
		console.log("************ ", skillsResult);
		res.render('stats',{
			user_name : skillsResult[0].user_name,
			reward_level : skillsResult[0].season_rewards.level,
			skills : skillsResult[0].player_skills,
			goals : goalsResult[0].value
			})});
	});
});

module.exports = router;
