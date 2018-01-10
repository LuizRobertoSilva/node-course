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
    
    //deleteMany
    // db.collection('Todos').deleteMany({text:"Walk  the dog"}).then((result)=>{
    //     console.log(result);
    // },(err)=>{
    //     console.log(err);
    // })
    //deleteOne
    // db.collection('Todos').deleteOne({completed:false}).then((result)=>{
    //     console.log(result);
    // })

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed:false}).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').deleteMany({name:'Luiz'}).then((result)=>{
        console.log(result);
    });

    db.collection('Users').findOneAndDelete({_id: new ObjectID("5a5695c53f333639d82d1a25")}).then((result)=>{
        console.log(result);
    })


    //db.close();
});