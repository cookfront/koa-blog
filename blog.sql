-- 文章表
CREATE TABLE articles (
  `aid` int(10) unsigned NOT NULL auto_increment,
  `title` varchar(200) default NULL,
  `slug` varchar(200) default NULL,
  `created_at` int(10) unsigned default '0',
  `updated_at` int(10) unsigned default '0',
  `text` text,
  `order` int(10) unsigned default '0',
  `authorId` int(10) unsigned default '0',
  `type` varchar(16) default 'post',
  `status` varchar(16) default 'publish',
  `password` varchar(32) default NULL,
  `commentsNum` int(10) unsigned default '0',
  `allowComment` char(1) default '0',
  `allowFeed` char(1) default '0',
  PRIMARY KEY  (`cid`),
  UNIQUE KEY `slug` (`slug`),
  KEY `created` (`created`)
);

-- 文章和文章元信息表关联表
CREATE TABLE articles_metas (
  `aid` int(10) unsigned NOT NULL,
  `mid` int(10) unsigned NOT NULL,
  PRIMARY KEY  (`aid`,`mid`)
);

-- 文章元信息表
CREATE TABLE metas (
  `cid` int(10) unsigned NOT NULL auto_increment,
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

CREATE TABLE `comments` (
  `coid` int(10) unsigned NOT NULL auto_increment,
  `cid` int(10) unsigned default '0',
  `created_at` int(10) unsigned default '0',
  `author` varchar(200) default NULL,
  `authorId` int(10) unsigned default '0',
  `ownerId` int(10) unsigned default '0',
  `email` varchar(200) default NULL,
  `url` varchar(200) default NULL,
  `ip` varchar(64) default NULL,
  `agent` varchar(200) default NULL,
  `text` text,
  `type` varchar(16) default 'comment',
  `status` varchar(16) default 'approved',
  `parent` int(10) unsigned default '0',
  PRIMARY KEY  (`coid`),
  KEY `cid` (`cid`),
  KEY `created` (`created`)
);
