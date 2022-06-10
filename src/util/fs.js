var fs = require('fs')
var path = require('path')
// var exec = require('child_process').exec
// eslint-disable-next-line space-before-function-paren
module.exports = {
    //fn1
    readFileList: function (dir, filesList = []) {
        const files = fs.readdirSync(dir)
        files.forEach((item, index) => {
            var fullPath = path.join(dir, item)
            const stat = fs.statSync(fullPath)
            if (stat.isDirectory()) {
                this.readFileList(path.join(dir, item), filesList) //递归读取文件
            } else {
                filesList.push(fullPath)
            }
        })
        return filesList
    },
    //fn2
}
