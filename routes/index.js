var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', {  }); // index.hbs file is rendered
});

router.get('/index', function(req, res, next) {
    res.render('index', {  }); // index.hbs file is rendered
});

router.get('/maps', function(req, res, next) {
    res.render('maps', {  }); // index.hbs file is rendered
});

router.get('/profile', function(req, res, next) {
    res.render('profile', {  }); // index.hbs file is rendered
});

router.get('/login', function(req, res, next) {
    res.render('login', {  }); // index.hbs file is rendered
});

router.get('/register', function(req, res, next) {
    res.render('register', {  }); // index.hbs file is rendered
});

router.get('/icons', function(req, res, next) {
    res.render('icons', {  }); // index.hbs file is rendered
});



module.exports = router;
