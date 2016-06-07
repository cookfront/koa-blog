var path = require('path');
var ROOTPATH = path.dirname(__dirname);
var PORT = 3000;

var __root = function(dir) {
    return path.join(ROOTPATH, dir);
};

module.exports = Object.assign(require('../package.json'), {
    port: PORT,
    domain: 'http://localhost:' + PORT
});
