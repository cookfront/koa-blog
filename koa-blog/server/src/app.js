var koa = require('koa');
var app = koa();
var routes = require('./router');

// routes
app.use(routes);

app.listen(3000);
