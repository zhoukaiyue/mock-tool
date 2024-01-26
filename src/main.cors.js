//参考：https://www.runoob.com/nodejs/nodejs-express-framework.html
var express = require('express')
var app = express()
var path = require('path')
// 配置中间件，解决跨域问题
app.use(
    require('cors')({
        origin: '*', //允许所有域名访问
        credentials: true,
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        optionsSuccessStatus: 204,
        allowedHeaders: 'Content-Type,Authorization',
    })
)
//导入工具函数：读取指定目录下所有文件
const $fs = require('./util/fs')
//导出所有项目的功能接口模块
var filesList = []
$fs.readFileList(path.join(__dirname, '..', 'src/project'), filesList)

filesList.forEach((f) => {
    app.use(require(f))
})

app.listen(8081, function () {
    console.log('应用实例，访问地址为 http://0.0.0.0:8081')
})
