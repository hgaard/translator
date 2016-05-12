var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Da Translator' });
});


router.post('/english', function (req, res) {
    console.log(req.body);
    res.redirect("http://google.com/search?q=translate+" + req.body.danish_words + "+to+english")
});

router.post('/danish', function (req, res) {
    console.log(req.body);
    res.redirect("http://google.com/search?q=translate+" + req.body.english_words + "+to+danish")
});

module.exports = router;
