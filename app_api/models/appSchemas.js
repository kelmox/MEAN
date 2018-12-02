const mongoose = require('mongoose');

const scorerSchema = new mongoose.Schema({year:String, player:String, team:String});
const winnerSchema = new mongoose.Schema({year:String, team:String});

mongoose.model('khlscorer', scorerSchema, 'khlscorer');
mongoose.model('khlwinner', winnerSchema, 'khlwinner');