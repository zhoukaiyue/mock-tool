//参考：https://www.runoob.com/nodejs/nodejs-express-framework.html
//express_demo.js 文件
var express = require('express')
var app = express()

app.get('/', function (req, res) {
    res.send('Hello World')
})

app.listen(8081, function () {
    console.log('应用实例，访问地址为 http://0.0.0.0:8081')
})
