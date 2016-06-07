var koa = require('koa');
var koaStatic = require('koa-static');
var config = require('config');
var app = koa();

app.use(koaStatic('public'));

app.listen(config.port);
console.log('\nServe at: ' + config.domain + '\n');
