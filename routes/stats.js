var express = require('express');
var router = express.Router();
var promise = require('promise');

var skills = require('../public/javascripts/skills.js');
var goals = require('../public/javascripts/goals.js');
var id = require('../public/javascripts/player_id.js');

router.post('/', function(req, res) {
	//console.log("Username: ", id.getPID());
	id.setPID(req.body.username);
	//console.log("Username: ", id.getPID());
	var initializeSkillPromise = skills.makeRequest();
	var initializeGoalsPromise = goals.makeRequest();
	initializeSkillPromise.then(function(result){
			initializeGoalsPromise.then(function(result){
		console.log("************ ", skillsResult[0].player_skills);
		res.render('stats',{
			user_name : skillsResult[0].user_name,
			reward_level : skillsResult[0].season_rewards.level,
			solo_mmr : skillsResult[0].player_skills[0].skill,
			doubles_mmr : skillsResult[0].player_skills[1].skill,
			solostandard_mmr : skillsResult[0].player_skills[2].skill,
			standard_mmr : skillsResult[0].player_skills[3].skill,
			goals : goalsResult[0].value
			})});
	});
});

module.exports = router;
