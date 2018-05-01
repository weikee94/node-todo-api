// root of the application
var mongoose = require('mongoose');

// setup to using the promise we want
mongoose.Promise = global.Promise;
mongoose.connect(process.env.MONGODB_URI);

module.exports = {
    mongoose: mongoose
}