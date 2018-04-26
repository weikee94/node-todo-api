// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    const db = client.db('TodoApp');

    // Three methods to remove data

    // deleteMany
    // db.collection('Todos').deleteMany({text: 'Wash Car'}).then((result) => {
    //     console.log(result);
    // });


    //deleteOne
    db.collection('Todos').deleteOne({'test': 'play football'}).then((result) => {
        console.log(result);
    });

    //findOneAndDelete
    // db.collection('Todos').findOneAndDelete({completed: true}).then((r) => {
    //     console.log(r);
    // });

    // client.close();
});