/**
 * 路由配置文件
 */
var router = require('koa-router')();

router.get('/', function* () {
  this.body = "hello world";
});

module.exports = router.routes();
