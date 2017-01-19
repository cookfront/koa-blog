/**
 * 文章的controller层
 */
var ContentService = require('../service/content');

var ContentController = {
  fetchContentById: function* () {
    var id = this.params.id;
    var content;

    try {
      content = yield ContentService.fetchContentById(id);
      this.body = {
        success: true,
        data: content
      };
    } catch (e) {
      this.status = 500;
      this.body = {
        success: false,
        message: e.message
      };
    }
  },

  deleteContentById: function* () {
    var id = this.params.id;

    try {
      yield ContentService.deleteContentById(id);
      this.body = {
        success: true,
        id: id
      };
    } catch (e) {
      this.body = {
        success: false,
        message: e.message
      };
    }
  }
};

module.exports = ContentController;
