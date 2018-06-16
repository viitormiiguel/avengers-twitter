
var mongoose = require('mongoose');

module.exports = mongoose.model('Uex',{
	name : {type : String, default: ''}
});