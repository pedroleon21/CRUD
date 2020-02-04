const mongoose = require('mongoose');

mongoose.connect('mongode://localhost/serverdb',{useMongocliente: true});
mongoose.Promise = global.Promise;

module.exports = mongoose;