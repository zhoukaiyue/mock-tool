var express = require('express')
var router = express.Router()
// 用 body-parser 库进行数据格式转换
const bodyParser = require('body-parser')
// // 是否进行url解码
//返回的对象是一个键值对，当extended为false的时候，键值对中的值就为'String'或'Array'形式，为true的时候，则可为任何数据类型。
router.use(bodyParser.urlencoded({ extended: true })) //对应  content-type: application/x-www-form-urlencoded
// // 将数据转换为json格式
router.use(bodyParser.json()) //  对应  content-type: application/json

// define the home page route
//商品列表
router.get('/agent_goods/goods/', function (req, res) {
    // 通过 req.query 获取客户端通过查询字符串，发送到服务器的数据
    const query = req.body //get请求用req.query，post请求用req.body
    console.log(query)
    // 调用res.send()方法，向客户端响应处理的结果
    const data = require('../../json/demo-1/agent_goods.json')
    res.send(data)
})

// 把 router 这个函数暴露出去
module.exports = router //注意：这里是exports不是export
