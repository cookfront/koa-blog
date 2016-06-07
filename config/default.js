var path = require('path');
var ROOTPATH = path.dirname(__dirname);
var PORT = 8888;

var __root = function(dir) {
    return path.join(ROOTPATH, dir);
};

module.exports = Object.assign(require('../package.json'), {
    port: PORT,
    domain: 'http://localhost:' + PORT,
    path: {
    	html: __root('public/src/view')
    },
    dbConfig: {
        host: 'localhost',
        db_name: 'mock',
        username: 'root',
        password: '123456'
    }
});
