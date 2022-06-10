//参考：https://www.runoob.com/nodejs/nodejs-express-framework.html
//express_demo.js 文件
var express = require('express')
var app = express()
var path = require('path')

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
