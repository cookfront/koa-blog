前端接口文档
========

## 博客列表(articles.json)

### 接口请求参数

```json
当前页数：currPage
每页数据条数：pageSize
搜素关键字：search
分类Id：categoryId
标签Id：tagId
作者Id：authorId
```

### 接口结果返回

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

## 添加文章

### 接口请求参数

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

### 接口结果返回

```json
{
	"code": 0,
	"msg": ""
}
```

## 根据ID获取博客信息

## 根据分类ID获取博客列表

## 根据标签ID获取博客列表

## 获取标签列表

## 获取分类列表

## 获取评论列表

## 根据博客ID获取评论列表

## 获取用户列表
