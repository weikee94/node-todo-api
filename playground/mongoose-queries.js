const {ObjectID} = require('mongodb');

const {mongoose} = require('./../server/db/mongoose');
const {Todo} = require('./../server/models/todo');
const {User} = require('./../server/models/user');

// var id = '5ae4792cc01fd70c72aaa6ae';

// if (!ObjectID.isValid(id)) {
//     console.log('Id not valid');
// }

// Todo.find({
//     _id: id
// }).then((todos) => {
//     console.log('Todos', todos);
// })

// Todo.findOne({
//     _id: id
// }).then((todo) => {
//     console.log('Todo', todo);
// })

// Todo.findById(id).then((todo) => {
//     if (!todo) {
//         return console.log('Id not found');
//     }
//     console.log('Todo By Id', todo);
// }).catch((e) => {
//     console.log(e);
// })

// User.findById
var userid = '5ae425706795d5064a84ec1d';

if (!ObjectID.isValid(userid)) {
    console.log('userid not valid');
}

User.findById(userid).then((user) => {
    if (!user) {
        return console.log('User not found!');
    }
    console.log('User Id', user);
}).catch((e) => {
    console.log(e);
});

