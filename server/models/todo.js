// create mongoose model so it knows how to store data
var mongoose = require('mongoose')
var Todo = mongoose.model('Todo', {
    text: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    completedAt: {
        type: Number,
        default: null
    }
});

module.exports = {
    Todo: Todo
}


//below is the example
// create instance
// var newTodo = new Todo({
//     text: 'Edit this video    '
// });

// save data to database
// newTodo.save().then((doc) => {
//     console.log("Saved todo", doc);
// }, (e) => {
//     console.log("Unable to save todo");
// })