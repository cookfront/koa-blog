/**
 * 文章的controller层
 */
var ContentService = require('../service/content');

var ContentController = {
  fetchContentById: function* (next) {
    var id = this.params.id;
    var content;

    try {
      content = yield ContentService.fetchContentById(id);
    } catch (e) {

    }
    yield next;
  }
};

module.exports = ContentController;
