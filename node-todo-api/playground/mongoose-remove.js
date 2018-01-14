const {
    ObjectID
} = require('mongodb')
const {
    mongoose
} = require('./../server/db/mongoose');
const {
    Todo
} = require('./../server/models/todo');

const {
    User
} = require('./../server/models/user');

//Model.remove({})
Todo.remove({}).then((res) => {
    console.log('Remove all todos');
})

Todo.findOneAndRemove({_id: 'asd'}).then((todo) => {

});

Todo.findByIdAndRemove('asd').then((todo) => {
    console.log(todo)
})