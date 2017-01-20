/**
 * 文章对应的路由
 */
var Router = require('koa-router');
var contentController = require('../controllers/content');

const router = Router({
  prefix: '/articles'
});

router.get('/:id', contentController.fetchContentById);
router.delete('/:id', contentController.deleteContentById);

module.exports = router;
