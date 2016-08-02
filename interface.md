前端接口文档
========

## 文章接口

### 文章列表(get /articles)

#### 接口请求参数

```json
当前页数：currPage
每页数据条数：pageSize
搜素关键字：search
分类Id：categoryId
标签Id：tagId
作者Id：authorId
```

#### 接口结果返回

```json
{
	"code": 0,
	"msg": "",
	"data": {
		"list": [
			{
				"aid": 1,
				"title": "article name",
				"slug": "article slug",
				"updated_at": "1469636493",
				"text": "blog text",
				"userName": "cookfront",
				"commentsNum": 5,
			}
		],
		"pageSize": 10,
		"totalCount": 100
	}
}
```

### 新增和更新文章(post /articles)

#### 接口请求参数

```json
文章标题：title
文章内容：text
是否允许评论：allowComment
是否允许feed：allowFeed
公开度：status
分类：category
标签：tags
类型：type（post || page）
```

#### 接口结果返回

```json
{
	"code": 0,
	"msg": ""
}
```

### 根据ID获取文章信息(/articles/:id)

#### 接口结果返回

```json
{
	"code": 0,
	"msg": "",
	"data": {
		"aid": 1,
		"title": "article name",
		"slug": "article slug",
		"updated_at": "1469636493",
		"text": "blog text",
		"userName": "cookfront",
		"commentsNum": 5,
	}
}
```

### 根据多个ID批量删除文章

## 分类接口

### 根据分类ID获取文章列表

### 获取分类列表

### 新增和更新分类

### 根据ID获取分类信息

### 根据多个ID批量删除分类

## 标签接口

### 根据标签ID获取文章列表

### 获取标签列表

### 新增和更新标签

### 根据ID获取标签信息

### 根据多个ID批量删除标签

## 评论接口

### 获取评论列表

### 根据博客ID获取评论列表

### 新增和更新评论

### 根据ID删除评论

### 根据多个ID批量删除评论

### 根据多个ID审核评论

### 根据ID审核评论

### 回复评论

## 用户接口

### 获取用户列表

### 用户登录

### 新增和更新用户

### 根据多个ID删除用户
