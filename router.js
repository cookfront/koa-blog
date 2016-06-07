var koaRouter = require('koa-router');
var koaBody = require('koa-body');

var indexController = require('./controllers/index')

var router = koaRouter();
var body = koaBody();

router.get('*', indexController.index);

module.exports = router;
