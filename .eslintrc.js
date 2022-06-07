module.exports = {
    root: true,
    env: {
        browser: true,
        commonjs: true,
        es2021: true,
        node: true,
    },
    extends: ['standard'],
    parserOptions: {
        ecmaVersion: 'latest',
    },
    rules: {
        indent: 0, // 缩进风格
        'comma-dangle': 0, // 对象字面量项尾不能有逗号
        'no-const-assign': 2, // 禁止修改const声明的变量
        'no-undef': 1, //不能有未定义的变量
        'spaced-comment': 0, //注释风格要不要有空格什么的
        'no-var': 0, //禁用var，用let和const代替
    },
}
