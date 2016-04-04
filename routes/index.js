var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile('ng/index.html');
});

router.get('/nike/oldShoes', function (req, res, next) {
    res.sendfile('ng/index.html');
});

router.get('/nike/prevNewShoes', function (req, res, next) {
    res.sendfile('ng/index.html');
});

module.exports = router;
