// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

// var obj = new ObjectID();
// console.log(obj);

// destructuring
// var user = { name: 'Wei', age: 25 };
// var {name} = user;
// console.log(name);

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    // const db = client.db('TodoApp');
    // db.collection('Todos').insertOne({
    //     text: 'Something to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    // Insert new doc into USers (name, age, location)
    // const db = client.db('TodoApp');
    // db.collection('Users').insertOne({
    //     name: 'Wei',
    //     age: 21,
    //     location: 'Malaysia'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log("Unable to insert todo", err);
    //     }
    //     console.log(JSON.stringify(result.ops[0]._id.getTimestamp(), undefined, 2));
    // });

    client.close();
});