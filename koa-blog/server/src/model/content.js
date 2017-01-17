/**
 * 文章的model层
 */
var Sequelize = require('sequelize');
var config = require('../config/config.js');
var sequelize = config.sequelize;

var ContentModel = sequelize.define('typecho_contents', {

});

module.exports.ContentModel = ContentModel;
