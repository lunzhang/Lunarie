var express = require('express');
var router = express.Router();
var jwt = require('express-jwt');
var auth = jwt({
    secret: 'MY_SECRET',
    userProperty: 'payload'
});

var ctrlProfile = require('../controllers/profile');
var ctrlAuth = require('../controllers/authentication');
var ctrlMessage = require('../controllers/messages.controller');
var ctrlRates = require('../controllers/rates.controller');
// profile
router.get('/profile', auth, ctrlProfile.profileRead);
router.get('/messages', ctrlMessage.getMessages);
router.get('/rates/:period', ctrlRates.getRates);
// authentication
router.post('/register', ctrlAuth.register);
router.post('/login', ctrlAuth.login);

module.exports = router;