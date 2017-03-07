/*
var express = require('express');
var router = express.Router();
*/
/* GET cities listing. */
/*
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});
module.exports = router;
*/

modules.exports = function (app, db) {
  var HTTPStatus = require('http-status');
  return {
    root: function(req, res, next) {
      db.City.findAll()
      .then(function(cities){
        return res.render('/views/cities.html',cities);
      }).catch(function(error){
        return res.status(HTTPStatus.INTERNAL_SERVER_ERROR)
                  .json({'error': error});
      });
    },
    otraRuta: function(req, res, next) {
       return res.render('plantilla', datos);
    }
  } // return
} // exports
