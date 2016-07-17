var express = require('express');
var router = express.Router();
var fs = require('fs');

var MPlayer = require('mplayer');

options = {
	debug: false
};

console.log('I\'m here');
var player = new MPlayer(options);

player.on('start', console.log.bind(this, 'playback started'));
player.on('status', console.log);

player.setOptions({
	volume: 100
});
player.openFile('./1.mp3');

setTimeout(player.volume.bind(player, 100), 1000);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
