/*
 * Books Routes
 */

var books = require('../data/books');

module.exports = function(app) {

  app.get('/books', function(req, res){
    res.send( books );
  });

  app.post('/books', function(req, res) {

    if (books[req.body.name]) {
      res.send(409);
    } else {
      books[req.body.name] = req.body;
      res.send(200);      
    }
  });

  app.delete('/books/:name', function(req, res, next) {
    if (books[req.params.name]) {
      delete books[req.params.name];
      res.redirect('/books');
    } else {
      next();
    }
  });

};