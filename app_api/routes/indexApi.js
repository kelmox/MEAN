const express = require('express');
const router = express.Router();

const ctrlApiScorer = require('../controllers/ctrlApiScorer');
const ctrlApiWinner = require('../controllers/ctrlApiWinners');

router
    .route('/khlscorer')
    .get(ctrlApiScorer.scorerList)
    .post(ctrlApiScorer.addScorer);

router
    .route('/khlwinner')
    .get(ctrlApiWinner.winnersList)
    .post(ctrlApiWinner.addWinner);

module.exports = router;


