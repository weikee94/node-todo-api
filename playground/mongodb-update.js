// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, client) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connect to MongoDB server');

    const db = client.db('TodoApp');

    // find one and update
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ae082a659e7560909497657')
    }, {
        $set: {
            age: 31
        }
    }, {
        returnOriginal: false
    }).then((r) => {
        console.log(r);
    });

    // find one and using increment methods
    db.collection('Users').findOneAndUpdate({
        _id: new ObjectID('5ae082a659e7560909497657')
    }, {
        $inc: {
            age: -4
        }
    }, {
        returnOriginal: false
    }).then((r) => {
        console.log(r);
    });


    // client.close();
});