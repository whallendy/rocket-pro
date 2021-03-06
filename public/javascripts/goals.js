module.exports.makeRequest= function(err, res) {
	var player_id = require('../javascripts/player_id').getPID();
	var platform = require('../javascripts/player_id').getPlatform();
	var request = require('request'),
		url = url = "https://api.rocketleague.com/api/v1/"+platform+"/leaderboard/stats/goals/"+player_id,
		auth = 'Token f9292bcbae319bb405d7f4416308870841213880';
		
	return new Promise(function(resolve, reject) {
		request(
			{
				url : url,
				json : true,
				headers : {
					"Authorization" : auth
				}
			},
			function (error, response, body) {
				if (error) {
					reject(error);
				} else {
					resolve(body);
					goalsResult=body;
					return goalsResult;
				}
			});
	});
}