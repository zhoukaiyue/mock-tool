## 介绍

MOCK-TOOL 是一个基于 nodejs+express 开发的接口 mock 系统。

## 快速上手

### 目录说明

```bash
├─src
│     package		                #项目依赖的第三方扩展包
│     project		                #项目view（在这里建项目，命名规范以项目名称命令）
│     json	                        #project中项目接口对应的数据库，文件命名规范与project中文件命名规范保持一致
```

### 命令

-   npm run start 启动服务

-   npm run lint:eslint 使用 eslint 校验文件

-   npm run lint:eslintFix 自动修复所有格式引起的报错

-   npm run lint:prettier 使用 Prettier 格式化所有文件
