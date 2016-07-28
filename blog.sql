-- 文章和分类关联表
CREATE TABLE articles_categories (
  `article_id` int(11),
  `category_id` int(11)
);

-- 文章和标签关联表
CREATE TABLE articles_tags (
  `article_id` int(11),
  `tag_id` int(11)
);

-- 分类表
CREATE TABLE categories (
  `id` int(11) DEFAULT NULL auto_increment PRIMARY KEY,
  `name` varchar(255),
  `created_at` datetime,
  `updated_at` datetime,
  `position` int(11)
);

-- 标签表
CREATE TABLE tags (
  `id` int(11) DEFAULT NULL auto_increment PRIMARY KEY,
  `name` varchar(255),
  `created_at` datetime,
  `updated_at` datetime,
  `display_name` varchar(255)
);

-- 用户表
CREATE TABLE users (
  `id` int(11) DEFAULT NULL auto_increment PRIMARY KEY,
  `username` varchar(255),
  `password` varchar(255),
  `email` text,
  `name` text
);
