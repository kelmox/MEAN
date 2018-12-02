const express = require('express');
const router = express.Router();

// Declaring the controllers
const ctrlMain = require('../controllers/ctrlMain');
const ctrlWinners = require('../controllers/ctrlWinners');
const ctrlScorer = require('../controllers/ctrlScorer');

// Defining the routes and associating the routes to their corresponding controllers
router.get('/', ctrlMain.index);  // Home page
router.get('/khlwinners', ctrlWinners.winnerlist);
router.get('/khlscorer', ctrlScorer.scorerlist);
router
    .route('/khlscorer/add')
    .get(ctrlScorer.showForm)
    .post(ctrlScorer.addData);

module.exports = router;