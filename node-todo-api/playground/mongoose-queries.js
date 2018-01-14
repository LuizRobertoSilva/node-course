const {ObjectID} = require('mongodb')
const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');

const {User} = require('./../server/models/user');
// var id = '5a5802f5a0180f37949446b311';

// if(!ObjectID.isValid(id)){
//     console.log('Id Not Valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// });

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// });

// Todo.findById(id).then((todo) => {
//     if(!todo){
//         return console.log('Id not found');
//     }
//     console.log('Todo by id', todo);
// }).catch((err)=>{
//     console.log(err);
// });
var userId = '5a57f3906cc6643a449ea4f9';

User.findById(userId).then((user)=>{
    if(!user){
        return console.log('User not Found');
    }
    console.log('User Found', user);
}).catch((err)=> console.log('Error', err));

