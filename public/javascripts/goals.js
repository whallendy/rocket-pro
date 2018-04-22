var player_id = require('../javascripts/player_id').getPID();
var request = require('request'),
    url = "https://api.rocketleague.com/api/v1/steam/leaderboard/stats/goals/"+player_id,
    auth = 'Token f9292bcbae319bb405d7f4416308870841213880';

request(
    {
        url : url,
        json : true,
        headers : {
            "Authorization" : auth
        }
    },
    function (error, response, body) {
        if (error) throw error;
        console.log("error: ", error);
        console.log("body: ", body);
        goals = body;       
    }
);

module.exports.getGoals= function() {
    return goals;
}