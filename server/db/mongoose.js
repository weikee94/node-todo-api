// root of the application
var mongoose = require('mongoose');

// setup to using the promise we want
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/TodoApp');

module.exports = {
    mongoose: mongoose
}