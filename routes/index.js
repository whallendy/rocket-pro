var express = require('express');
var router = express.Router();
var id = require('../public/javascripts/player_id.js');

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Rocket Pro',
  		  				selectSteam: id.platformSelect("steam"),
  						//selectXboxone: id.platformSelect("xboxone"),
  						//selectPs4: id.platformSelect("ps4") 
  					   }
  );
});

module.exports = router;
