var db = require('./db');

module.exports.handleSignup = (email, passsword) => {

    db.saveUser({
        email,
        passsword
    });

};