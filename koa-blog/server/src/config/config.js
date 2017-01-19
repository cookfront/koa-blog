var Sequelize = require('sequelize');

// 根据NODE_ENV获取配置
var env = process.env.NODE_ENV || 'development';
var blogConfig = env === 'development' ? require('./development') : require('./production');

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

module.exports.sequelize = sequelize;
module.exports.port = blogConfig.port;
