var koa = require('koa');
var koaStatic = require('koa-static');
var config = require('config');
var router = require('./router.js');
var app = koa();

app.use(koaStatic('.'));

app
	.use(router.routes())
	.use(router.allowedMethods());

app.listen(config.port);
console.log('\nServe at: ' + config.domain + '\n');
