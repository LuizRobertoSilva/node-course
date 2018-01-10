//const MongoClient = require('mongodb').MongoClient;
const {
    MongoClient,
    ObjectID
} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');
    //db.collection('Colecao').find({Objeto de filtro})
    // db.collection('Todos').find({
    //    // _id: new ObjectID('5a5692361c385f79966fbd72')
    // }).toArray().then((docs) => {
    //     console.log('Todos');
    //     console.log(JSON.stringify(docs, undefined, 2));
    // }, (err) => {
    //     console.log('Unablw to fetch todos', err);
    // });
    // db.collection('Todos').find({}).count().then((count)=>{
    //     console.log('Todos Count:' + count)
    // }, (err)=>{
    //     console.log('Unable to fetch data', err);
    // })

    db.collection('Users').find({
        name: 'Luiz'
    }).toArray().then((docs) => {
        console.log('Users');
        console.log(JSON.stringify(docs,undefined,2));
    }, (err) => {
        console.log('Unable to fetch data', err);
    })

    db.close();
});