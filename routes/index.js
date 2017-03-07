var express = require('express');
var router = express.Router();
var models = require('/models'); /////

/* GET home page. */
router.get('/', function(req, res, next) {
	res.render('index', { title: 'Express' });
});

module.exports = router;

/////////////////////
/*var m = require('../models');

var getPosts = function(req, res) {
	m.models.cities.findAll({
		//order: 'createdAt DESC'
	}).then(function(result){	
		res.send(result);
	}, function(err){
		console.log(err);
	});
};


exports.routes = {
	getPosts: getPosts
};*/