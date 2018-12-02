const request = require('request');
const apiURL = require('./apiURLs');

const showForm = function(req, res){
    res.render('scorer_add');
};

const addData = function(req, res){
    const path = '/api/khlscorer';

    const postdata = {
        year: req.body.year,
        player: req.body.player,
        team: req.body.team
    };

    const requestOptions = {
        url : apiURL.server + path,
        method : 'POST',
        json : postdata
    };

    request(
        requestOptions,
        function (err, response) {
            if(response.statusCode === 201){
                res.redirect('/khlscorer');
            } else {
                res.render('error', {message: 'Error adding data: ' + response.statusMessage + ' (' + response.statusCode + ')'});
            }
        }
    )
};



const scorerlist = function(req, res){
    const path = '/api/khlscorer';
    const requestOptions = {
        url : apiURL.server + path,
        method : 'GET',
        json : {},
        qs : {}
    };

    request(
        requestOptions,
        function (err, response, body) {
            if (err){
                res.render('error', {message: err.message});
            } else if (response.statusCode !== 200){
                res.render('error', {message: 'Error accessing API: ' + response.statusMessage + " ("+ response.statusCode + ")"});
            } else if (!(body instanceof Array)){
                res.render('error', {message: 'Unexpected response data'});
            } else if (!body.length){
                res.render('error', {message: 'No documents in collection'});
            } else {
                res.render('khlscorer', {scorers: body});
            }
        }
    )

};

module.exports = {
    scorerlist,
    showForm,
    addData
};