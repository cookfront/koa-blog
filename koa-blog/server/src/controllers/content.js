/**
 * 文章的controller层
 */
var ContentService = require('../services/content');
var bodyFormat = require('../utils/bodyFormat');

var ContentController = {
  /**
   * 根据id获取文章详情
   */
  fetchContentById: function* () {
    var id = this.params.id;
    var content;

    try {
      content = yield ContentService.fetchContentById(id);
      this.body = bodyFormat.formatSuccessBody(content);
    } catch (e) {
      this.body = bodyFormat.formatErrorBody(e.message);
    }
  },

  /**
   * 根据id删除对应文章
   */
  deleteContentById: function* () {
    var id = this.params.id;

    try {
      yield ContentService.deleteContentById(id);
      this.body = bodyFormat.formatSuccessBody(id, 'id');
    } catch (e) {
      this.body = bodyFormat.formatErrorBody(e.message);
    }
  }
};

module.exports = ContentController;
