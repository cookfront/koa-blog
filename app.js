var koa = require('koa');
var config = require('config');
var app = koa();

// response

app.use(function *(){
  this.body = 'Hello World';
});

app.listen(config.port);
console.log('\nServe at: ' + config.domain + '\n');