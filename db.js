var Sequelize = require('sequelize');
var config = require('config');

var dbConfig = config.dbConfig;
var sequelize;
/**
 * 数据库连接
 */
if (dbConfig.dialect == 'sqlite') {
    sequelize = new Sequelize(dbConfig.db_name, '', '', {
        host: dbConfig.host,
        dialect: 'sqlite',
        storage: dbConfig.storage,
        logging: function(str) {
            // do your own logging
        }
    });
} else {
    sequelize = new Sequelize(dbConfig.db_name, dbConfig.username, dbConfig.password, {
        host: dbConfig.host,
        timezone: '+08:00',
        pool: {
            max: 5,
            min: 0,
            idle: 10000
        },
        logging: function(str) {
            // do your own logging
        }
    });
}


module.exports = sequelize;
