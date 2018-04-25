var player_id = null;

module.exports.setPID = function(pid){
    player_id = pid;
}

module.exports.getPID = function(){
    return player_id;
}