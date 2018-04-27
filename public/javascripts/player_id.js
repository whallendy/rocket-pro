var player_id = null;
var platform = null;

module.exports.platformSelect = function(value){
	console.log("platformSelect function called");
    platform = value;
	console.log("Platform selected: ", platform);
}


module.exports.setPID = function(pid){
    player_id = pid;
}

module.exports.getPID = function(){
    return player_id;
}

module.exports.getPlatform = function(){
	return platform;
}