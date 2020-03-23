const passport = require('passport');
const JwtStrategy = require('passport-jwt').Strategy;
const LocalStrategy = require('passport-local').Strategy;
const { ExtractJwt } = require('passport-jwt');
const config = '../src/config.js';
const PassportService = require('./passport-service');

//JWT STRATEGY
passport.use(new JwtStrategy({
    jwtFromRequest: ExtractJwt.fromHeader('Authorization'),
    secretOrKey: config.JWT_SECRET
}, (payload, done) => {
    try {
        // FIND THE USER IN DATABASE

        PassportService.validateUser(knex, userInfo)
            .then(response => {
                
                // IF USER DOESN'T EXIST HANDLE IT
                if (!response) {
                    return done(null, false);
                }
            }

        // OTHERWISE RETURN THE USER

        done(null, user);
        
    } catch(error) {
        done(error, false);
    }
}));

//LOCAL STRATEGY
passport.use(new LocalStrategy({
    usernameField: 'username'
}, async (username, password, done) => {
    // find the user given the username

    // if not, handle it

    if (/*not exist*/) {
        return done(null, false)
    }

    // check if the password is correct

    // if not handle it

    if (/*password is incorrect*/) {
        return done(null, false)
    }

    // otherwise return the user

    done(null, /* user */)
}))