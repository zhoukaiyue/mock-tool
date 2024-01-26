//参考：https://www.runoob.com/nodejs/nodejs-express-framework.html
//express_demo.js 文件
var express = require('express')
var app = express()
var path = require('path')

//设置跨域访问
app.all('*', function (req, res, next) {
    res.set({
        'Access-Control-Allow-Origin': req.headers.origin || '*',
        'Access-Control-Allow-Methods':
            'GET, POST, PUT, DELETE, HEADER, PATCH, OPTIONS',
        /*允许服务端访问的客户端请求头*/
        'Access-Control-Allow-Headers': 'Content-Type,Authorization',
        'Access-Control-Allow-Credentials': true,
        'Access-Control-Max-Age': 1728000,
    })

    if (req.method === 'OPTIONS') {
        res.sendStatus(200)
    } else {
        next()
    }
})

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
