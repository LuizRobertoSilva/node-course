var mongoose = require('mongoose');

//Local DB
mongoose.Promise = global.Promise;
//HEROKU SERVER -> process of Mlab 
mongoose.connect(process.env.MONGO_URI||'mongodb://localhost:27017/TodoApp');


module.export = {
    mongoose: mongoose
};