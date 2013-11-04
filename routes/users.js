/*
 * User Routes
 */

var users = require('../data/users');

module.exports = function(app) {

  app.get('/users', function(req, res){
    console.log('retrive users');
    res.send( users );
  });

  app.post('/users', function(req, res) {
     console.log(users); 


    if (users[req.body.username]) {
      res.send(409);
    } else {
      console.log(req.body.username);
      users[req.body.username] = req.body;
      res.send(200);
      console.log(users);
    }
  });

  app.del('/users/:name', function(req, res, next) {
    if (users[req.params.name]) {
      delete users[req.params.name];
      res.redirect('/users');
    } else {
      next();
    }
  });

};