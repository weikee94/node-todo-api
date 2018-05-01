// root of the application
// var mongoose = require('mongoose');

// setup to using the promise we want
// mongoose.Promise = global.Promise;
// mongoose.connect('mongodb://localhost:27017/TodoApp');

var express = require('express');
var bodyParser = require('body-parser');

var { mongoose } = require('./db/mongoose');
var {Todo} = require('./models/todo');
var {User} = require('./models/user');
const {ObjectID} = require('mongodb');


var app = express();
const port = process.env.PORT || 3000;

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
    var todo = new Todo({
        text: req.body.text
    });

    // console.log(req);

    todo.save().then((doc) => {
        res.send(doc);
    }, (e) => {
        res.status(400).send(e);
    })
});

app.get('/todos', (req, res) => {
    Todo.find().then((todos) => {
        res.send({todos: todos})
    }, (e) => {
        res.status(400).send(e);
    })
});

// GET /todos/1234324
app.get('/todos/:id', (req, res) => {
    var id = req.params.id;
    // 5ae4792cc01fd70c72aaa6af
    // validate id using isValid
        // 404 - send back empty send

    // findById
        // success
            // if todo - send it back
            // if no todo - send back 404 with empty body
        // error
            // 400 - send empty back

    if (!ObjectID.isValid(id)) {
       console.log("Id not valid");
       // using below command will show on postman there
       return res.status(404).send();
    }

    Todo.findById(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
            // return console.log('Todo not found!');
        }
        return res.status(200).send({todo: todo});
        // console.log('Todo Id', todo);
    }).catch((e) => {
        res.status(400).send();
        console.log(e);
    });
});

app.delete('/todos/:id', (req, res) => {
    // get the id

    // validate the id -> not valid ? return 404

    // remove todo by id
        // success
            // if no doc, send 404
            // if doc, send doc back with 200
        // error
            //400
    var id = req.params.id;

    if(!ObjectID.isValid(id)) {
        return res.status(404).send();
    }

    Todo.findByIdAndRemove(id).then((todo) => {
        if (!todo) {
            return res.status(404).send();
        }
        return res.status(200).send({todo: todo});
    }).catch((e) => {
        res.status(400).send();
    })

});

app.listen(port, () => {
    console.log(`Started on port ${port}`);
});

module.exports = {
    app: app
}