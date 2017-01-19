/**
 * 文章的model层
 */
var Sequelize = require('sequelize');
var config = require('../config/config');
var sequelize = config.sequelize;

var ContentModel = sequelize.define('typecho_contents', {
  cid: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
		unique: true,
		primaryKey: true,
		field: 'cid'
  },
  /**
   * 文章标题
   */
  title: {
    type: Sequelize.STRING(200),
    allowNull: false,
    field: 'title'
  },
  /**
   * 别名
   */
  slug: {
    type: Sequelize.STRING(200),
    unique: true,
    field: 'slug'
  },
  /**
   * 文章创建时间时间戳
   */
  created: {
    type: Sequelize.INTEGER(10),
    field: 'created'
  },
  /**
   * 文章更新时间时间戳
   */
  modified: {
    type: Sequelize.INTEGER(10),
    field: 'modified'
  },
  /**
   * 文章内容
   */
  text: {
    type: Sequelize.TEXT,
    allowNull: false,
    field: 'text'
  },
  /**
   * 文章排序
   */
  order: {
    type: Sequelize.INTEGER(10),
    field: 'order'
  },
  /**
   * 作者ID
   */
  authorId: {
    type: Sequelize.INTEGER(10),
    allowNull: false,
    field: 'authorId'
  },
  template: {
    type: Sequelize.STRING(32),
    field: 'template'
  },
  /**
   * 文章类型
   */
  type: {
    type: Sequelize.STRING(16),
    defaultValue: 'post',
    field: 'type'
  },
  /**
   * 文章状态
   */
  status: {
    type: Sequelize.STRING(16),
    defaultValue: 'publish',
    field: 'status'
  },
  /**
   * 文章是否需要密码才能查看
   */
  password: {
    type: Sequelize.STRING(32),
    field: 'password'
  },
  /**
   * 文章评论数
   */
  commentsNum: {
    type: Sequelize.INTEGER(10),
    defaultValue: 0,
    field: 'commentsNum'
  },
  /**
   * 文章是否允许评论
   */
  allowComment: {
    type: Sequelize.CHAR(1),
    defaultValue: '0',
    field: 'allowComment'
  },
  /**
   * 文章是否允许被引用
   */
  allowPing: {
    type: Sequelize.CHAR(1),
    defaultValue: '0',
    field: 'allowPing'
  },
  /**
   * 文章是否允许出现在聚合中
   */
  allowFeed: {
    type: Sequelize.CHAR(1),
    defaultValue: '0',
    field: 'allowFeed'
  },
  parent: {
    type: Sequelize.INTEGER(10),
    defaultValue: 0,
    field: 'parent'
  }
});

module.exports = ContentModel;
