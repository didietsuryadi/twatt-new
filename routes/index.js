var express = require('express');
var router = express.Router();
var config = require('../config.json')
var Twitter = require('twitter');
var client = new Twitter({
  consumer_key: config.consumer_key,
  consumer_secret: config.consumer_secret,
  access_token_key: config.access_token_key,
  access_token_secret: config.access_token_secret
});

router.post('/post', function(req,res,next){
  var screenName = {screen_name: req.query.q}

  client.get('statuses/user_timeline', screenName, function(error, tweets, response) {
  if (!error) {
    res.send(tweets);
  }
})

})

router.get('/api/twitter', function(req,res,next){
  res.send('something wrong')
})
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Please use /search?=<yourquery>' });
});


module.exports = router;
