/*
 * @Descripttion:
 * @version:
 * @Author: zhoukai
 * @Date: 2024-01-26 16:50:59
 * @LastEditors: zhoukai
 * @LastEditTime: 2024-02-01 17:51:10
 */
var express = require('express')
var app = express()
var path = require('path')

// var cors = require('cors') // 引入 cors 模块
// // 使用 cors 中间件，并配置允许的域名
// app.use(
//     cors({
//         // origin: 设置多个 允许跨域的域名
//         origin: 'http://demo.127516.com,http://demo.127516.com', // 只允许 http://localhost:23001 这个域名访问
//     })
// )

// 导入工具函数：读取指定目录下所有文件
const $fs = require('./util/fs')
// 导出所有项目的功能接口模块
var filesList = []
$fs.readFileList(path.join(__dirname, '..', 'src/project'), filesList)

filesList.forEach((f) => {
    app.use(require(f))
})

app.listen(8081, function () {
    console.log('应用实例，访问地址为 http://0.0.0.0:8081')
})
