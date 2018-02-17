const {
    SHA256
} = require('crypto-js');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

var password = '123abc!';


// bcrypt.genSalt(10, (err, salt) => {
//     bcrypt.hash(password, salt, (err, hash) => {
//         console.log(hash);
//     });
// })

var hashPassword = '$2a$10$JRNL1f0ggCrxWnnwTjN3SuyZeKKnmiotj69AmK8lk/YKnykMe7C4G';

bcrypt.compare('123', hashPassword, (err, res) => {
    if(err){

    }
    console.log(res);
});




// var data = {
//     id: 10
// };


// var token = jwt.sign(data, '123abc');

// var decoded = jwt.verify(token + 1, '123abc');
// console.log('decoded', decoded);

// console.log(token);
// jwt.verify
// var message = 'I am user number 3';
// var hash = SHA256(message).toString();


// console.log(hash);

// var data = {
//     id: 4
// };

// var token = {
//     data,
//     hash: SHA256(JSON.stringify(data) + 'somesecret').toString()
// }

// // token.data.id = 5;
// // token.data.hash = SHA256(JSON.stringify(token.data)).toString();

// var resultHash = SHA256(JSON.stringify(token.data) + 'somesecret').toString()

// if(resultHash === token.hash)
// {
//     console.log('Data was not changed');
// }else{
//     console.log('Data was change, Do not trust')
// }