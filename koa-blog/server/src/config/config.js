var Sequelize = require('sequelize');
var config = require('./blogConfig');

// 根据NODE_ENV获取配置
var blogConfig = process.env.NODE_ENV === 'production' ? config.prod : config.dev;

var mysqlConfig = blogConfig.mysql;
var sequelize = new Sequelize(
  mysqlConfig.dbName,
  mysqlConfig.username,
  mysqlConfig.password,
  {
    host: mysqlConfig.host,
    port: mysqlConfig.port,
    dialect: 'mysql',
    pool: {
      max: 5,
      min: 0,
      idle: 10000
    },
    define: {
      freezeTableName: true,
      timestamps: false
    }
  }
);

module.exports = sequelize;
module.exports.port = blogConfig.port;
