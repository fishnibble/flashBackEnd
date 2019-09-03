const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
const User = require('../../dataAccess/index');
require('dotenv').config();

const usrOpts = {};
usrOpts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
usrOpts.secretOrKey = process.env.KEY

module.exports = passport => {
    passport.use('user',
        new JwtStrategy(usrOpts, (jwt_payload, done) => {
            User.findUserById(jwt_payload.id)
                .then(user => {
                    if (user) {
                        return done(null, user);
                    }
                    return done(null, false);
                })
                .catch(err => cosnole.log(err));
        })
    );
};