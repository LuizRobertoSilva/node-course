var express = require('express');
var bodyParser = require('body-parser');

var mongoose = require('./db/mongoose.js').mongoose;
var {
    ObjectId
} = require('mongodb');
var Todo = require('./models/todo.js').Todo;
var User = require('./models/user.js').User;
//var { User }= require('./models/user.js')
//HEROKU SERVER -> process.env.PORT
const port = process.env.PORT || 3000;



var app = express();
app.use(bodyParser.json());


app.post('/todos', (req, res) => {
    console.log(req.body);
    var todo = new Todo({
        text: req.body.text
    });
    todo.save().then((doc) => {
        res.send(doc);
    }, (err) => {
        res.status(400).send(err);
    });
})

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({
            todos: todos
        })
    }, (err) => {
        res.status(200).send(err);
    });
});

app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        console.log('Id is not Valid');
        res.status(404).send();
    }
    Todo.findById(id).then((todo) => {
        if (!todo) {
            res.status(404).send();
        }
        res.status(200).send({
            todo: todo
        });
    }).catch((err) => {
        res.status(400).send();
    })
});

app.delete('/todos/:id', (req, res) => {
    var id = req.params.id;
    if (!ObjectId.isValid(id)) {
        console.log('Id is not Valid');
        res.status(404).send();
    }
    Todo.findByIdAndRemove(id).then((todo) => {
        if(!todo){
            return res.status(404).send();
        }
        res.status(200).send({todoDeleted: todo})

    }).catch((e) => {
        res.status(400).send();
    });
});



app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

module.exports = {
    app
}