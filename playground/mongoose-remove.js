const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// Todo.remove({}).then((result) => {
//     console.log(result);
// })

// Todo.findOneAndRemove({
//    _id: '5ae7ed1b6d9db87262217674'
// }).then((todo) => {

// })

// Todo.findByIdAndRemove({

// })

Todo.findByIdAndRemove('5ae7ed1b6d9db87262217674').then((todo) => {
    console.log(todo);
});