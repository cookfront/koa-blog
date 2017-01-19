/**
 * 文章的service层
 */
var Content = require('../model/content');

var contentService = {
  /**
   * 根据id查找文章信息
   * 
   * @param {number} id 文章cid
   */
  fetchContentById(id) {
    return Content.findOne({
      where: {
        cid: id
      }
    }).then((article) => {
      console.log(article);
    });
  },

  /**
   * 根据id删除文字
   * 
   * @param {number} id 文章cid
   */
  deleteContentById(id) {

  }
};

module.exports = contentService;
