
var Uex = require('./models/uex');

module.exports = function(app) {

	app.get('api/uexs', function(req, res){
		Uex.find(function(err, uexs){
			if(err){
				res.send(err);
			}
			res.json(uexs);
		});
	});

	app.get('*', function(req, res){
		res.sendfile('./public/views/index.html');
	});

};