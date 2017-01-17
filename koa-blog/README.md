# Koa Blog

技术栈：

- Server端：
  - koa
  - koa-router
  - sequelize(ORM)
  - redis
- Client端：
  - react
  - redux
  - react-router
  - redux-saga
  - immutable.js
  - axios
  - sass

## 项目结构

```
- server
  - src
    - configs：配置文件
    - controllers：控制层
    - models：模型层
    - middlewares：koa中间件
    - services：服务层
    - routes.js：路由配置
    - app.js
  - tests
- client
  - build：打包配置
  - src：源代码
    - reducers
  - tests：单元测试用例
  - styles：样式文件
- package.json
```

