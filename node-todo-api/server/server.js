require('./config/config');
const _ = require('lodash');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('./db/mongoose.js').mongoose;
var {
    ObjectId
} = require('mongodb');
var Todo = require('./models/todo.js').Todo;
var User = require('./models/user.js').User;
var authenticate = require('./middleware/authenticate').authenticate;
//var { User }= require('./models/user.js')
//HEROKU SERVER -> process.env.PORT
const port = process.env.PORT;


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
        if (!todo) {
            return res.status(404).send();
        }
        res.status(200).send({
            todoDeleted: todo
        })

    }).catch((e) => {
        res.status(400).send();
    });
});
app.patch('/todos/:id', (req, res) => {
    var id = req.params.id;
    var body = _.pick(req.body, ['text', 'completed']);

    if (!ObjectId.isValid(id)) {
        console.log('Id is not Valid');
        res.status(404).send();
    }
    if (_.isBoolean(body.completed) && body.completed) {
        body.completedAt = new Date().getTime();
    } else {
        body.completed = false;
        body.completedAt = null;
    }
    Todo.findByIdAndUpdate(id, {
        $set: body
    }, {
        new: true
    }).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        res.send({
            todo
        });
    }).catch((err) => {
        res.status().send();
    });



});

app.post('/users', (request, respond) => {
    var body = _.pick(request.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        respond.header('x-auth', token).status(200).send(user);
    }).catch((e) => {
        console.log(e);
        respond.status(400).send(e);
    });
});

app.get('/user/me', authenticate, (req, res) => {
    res.send(req.user);
})

app.listen(port, () => {
    console.log(`Started on port ${port}`);
})

module.exports = {
    app
}