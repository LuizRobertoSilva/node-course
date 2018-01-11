var mongoose = require('mongoose');


var User = mongoose.model('User', {
    email: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 16,
        trim: true
    },
    password: {
        type: String,
        required: true,
        minlength: 4
    }
});

// var newUser = new User({
//     email: 'teste@teste.com',
//     password: '1234'
// });

// newUser.save().then((res) => {
//     console.log('User Added', res)
// }, (err) => {
//     console.log('Unable to add User', err)
// });

module.exports = {
    User:User
}