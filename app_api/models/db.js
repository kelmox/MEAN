const mongoose = require('mongoose');

const dbURI = 'mongodb://kelmo:meancourse1@ds119663.mlab.com:19663/meankhl';

mongoose.connect(dbURI);

mongoose.connection.on('connected', function(){
    console.log(`Mongoose connected to ${dbURI}`);
});
mongoose.connection.on('error', function(err){
    console.log('Mongoose connection error:', err);
});
mongoose.connection.on('disconnected', function(){
    console.log('Mongoose disconnected');
});

require('./appSchemas');