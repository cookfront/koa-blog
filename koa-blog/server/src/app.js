var koa = require('koa');
var app = koa();
var routes = require('./routes');

// routes
app.use(routes.routes(), routes.allowedMethods());

app.listen(3000);
