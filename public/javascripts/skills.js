module.exports.makeRequest= function(err, res) {
	var player_id = require('../javascripts/player_id').getPID();
	var platform = require('../javascripts/player_id').getPlatform();
	var request = require('request'),
		url = "https://api.rocketleague.com/api/v1/"+platform+"/playerskills/"+player_id,
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
				console.log("URL from skill.js: ", url);
				if (error) {
					reject(error);
				} else {
					resolve(body);
					skillsResult=body;
					return skillsResult;
				}
			});
	});
}



module.exports.getSkills= function() {
	console.log("return from getSkills: ", skills);
    return skillsResult;
}