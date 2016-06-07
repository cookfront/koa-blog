var fs = require('fs');
var config = require('config');
var path = require('path');

var tmpl = fs.readFileSync(
	path.resolve(config.path.html, 'index.html'),
	'utf8'
);
var indexControllers = {
	index: function*() {
		this.body = tmpl;
	}
};

module.exports = indexControllers;