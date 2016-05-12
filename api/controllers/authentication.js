var passport = require('passport');
var mongoose = require('mongoose');
var User = mongoose.model('User');

module.exports.register = function (req, res) {
    
    User.findOne({ email: req.body.email }, function (err, user) {
        if (err) { return err; }

        if (user) {
            res.status(400).json({message:'User already exists'});
        }
        else {
            var newUser = new User();
            newUser.email = req.body.email;
            newUser.setPassword(req.body.password);
            newUser.save(function (err) {
                var token;
                token = newUser.generateJwt();
                res.status(200);
                res.json({
                    "token" : token
                });
            });
        }
    });

};

module.exports.login = function (req, res) {
    
    passport.authenticate('local', function (err, user, info) {
        var token;

        if (err) {
            res.status(404).json(err);
            return;
        }
        
        if (user) {
            token = user.generateJwt();
            res.status(200);
            res.json({
                "token" : token
            });
        } else {
            res.status(401).json(info);
        }
    })(req, res);

};