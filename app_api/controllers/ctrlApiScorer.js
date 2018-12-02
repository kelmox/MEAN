// Get access to the database connection
const mongoose = require('mongoose');

// Get access to the 'goldenBallWinner' model so we can interact with the GoldenBallWinners collection
const scorerModel = mongoose.model('khlscorer');

const scorerList = function (req, res) {
    scorerModel.find({}, function(err, scorer){
        if (err){
            res.status(404).json(err);
        }
        else{
            res.status(200).json(scorer);
        }
    });
};

const addScorer = function (req, res) {
    scorerModel.create(req.body, function(err, newScorer){
            if (err){
                res.status(400).json(err);
            }
            else{
                res.status(201).json(newScorer);
            }
        }
    );
};

module.exports = {
    scorerList,
    addScorer
};