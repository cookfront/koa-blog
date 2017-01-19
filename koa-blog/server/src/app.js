var koa = require('koa');
var cors = require('koa-cors');
var logger = require('koa-logger');
var app = koa();
var routes = require('./route');
var config = require('./config/config');

// cors
app.use(cors());

// logger
app.use(logger());

// routes
app.use(routes.routes(), routes.allowedMethods());

app.listen(config.port);
console.log('\nServe at: 127.0.0.1:' + config.port + '\n');
