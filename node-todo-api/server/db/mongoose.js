var mongoose = require('mongoose');

//Local DB
mongoose.Promise = global.Promise;
//HEROKU SERVER -> process of Mlab 
mongoose.connect(process.env.MONGO_URI);


module.export = {
    mongoose: mongoose
};

