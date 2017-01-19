/**
 * 文章对应的路由
 */
var Router = require('koa-router');
var contentController = require('../controller/content');

const router = Router({
  prefix: '/articles'
});

router.get('/:id', contentController.fetchContentById);

module.exports = router;
