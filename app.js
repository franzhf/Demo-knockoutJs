
/**
 * Module dependencies.
 */

var express = require('express')
  , http = require('http')
  , path = require('path');

var app = express();

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
//app.use(express.bodyParser());
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//app.get('/', routes.index);

require('./routes/users')(app);

require('./routes/books')(app);

//require('./routes/loans')(app);

//require('./routes/returns')(app);

http.createServer(app).listen(app.get('port'), function(){  
  console.log('Express server listening on port ' + app.get('port'));
  //users.push({"username": "frank", "name": "Frank Sinatra", "bio": "Singer" });

});
