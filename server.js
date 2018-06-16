
// modules 
var express 		= require('express');
var app 			= express();
var bodyParser 		= require('body-parser');
var methodOverride 	= require('method-override');

// configuration

// config files 
var db = require('./config/db');

// set out port
var port = process.env.PORT || 9000;

app.use(bodyParser.json());

app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

app.use(bodyParser.urlencoded({ extended: true }));

app.use(methodOverride('X-HTTP-Method-Override'));

app.use(express.static(__dirname + '/public'));

require('./app/routes')(app);

app.listen(port);

console.log("|==== Running in localhost: "+port+ " ====|");

exports = module.exports = app;