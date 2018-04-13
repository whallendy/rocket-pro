var request = require('request'),
    url = "https://api.rocketleague.com//api/v1/steam/leaderboard/stats/goals/76561198272471658",
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
        console.log("error: ", error);
        console.log("body: ", body);
        goals = body[0].value;
        console.log("Number of Goals: ", goals);
    }
);




module.exports.getGoals= function(){
    return goals;
}