// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Inserindo chique',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to Insert todo', err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    db.collection('Users').insertOne({
        name:'Luiz',
        age: 20,
        location: 'Brazil'
    }, (err, result) => {
        if (err) {
            console.log('Unable to insert into Users', err)
        }
        console.log(JSON.stringify(result.ops, undefined, 2));
    });
    db.close();
});