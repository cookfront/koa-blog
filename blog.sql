-- 文章和文章元信息表关联表
CREATE TABLE articles_metas (
  `aid` int(11),
  `mid` int(11)
);

-- 文章元信息表
CREATE TABLE metas (
  `cid` int(11) unsigned NOT NULL auto_increment,
  `name` varchar(200) default NULL,
  `slug` varchar(200) default NULL,
  `type` varchar(32) NOT NULL,
  `description` varchar(200) default NULL,
  `count` int(10) unsigned default '0',
  `order` int(10) unsigned default '0',
  PRIMARY KEY  (`cid`),
  KEY `slug` (`slug`)
);

-- 用户表
CREATE TABLE users (
  `uid` int(10) unsigned NOT NULL auto_increment,
  `name` varchar(32) default NULL,
  `password` varchar(64) default NULL,
  `email` varchar(200) default NULL,
  `url` varchar(200) default NULL,
  `screenName` varchar(32) default NULL,
  `created_at` int(10) unsigned default '0',
  `updated_at` int(10) unsigned default '0',
  `group` varchar(16) default 'visitor',
  PRIMARY KEY  (`uid`),
  UNIQUE KEY `name` (`name`),
  UNIQUE KEY `mail` (`mail`)
);
