/*
 * @Descripttion:
 * @version:
 * @Author: dlg
 * @Date: 2020-06-15 13:36:21
 * @LastEditors: dlg
 * @LastEditTime: 2021-03-19 11:35:51
 */
module.exports = {
	root: true,
	parserOptions: {
		parser: 'babel-eslint', //使用 babel-eslint 解析器
		"sourceType": "module", //表示引入js的方式为模块引入
	},
	env: {
		browser: true,
		node: true,
		es6: true,
	},
	extends: ['plugin:vue/recommended', 'eslint:recommended'],

	// add your custom rules here
	rules: {
		"no-console": process.env.NODE_ENV === "production" ? "error" : "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
		"vue/no-use-v-if-with-v-for": 0, //禁止在与v-for相同的元素上使用v-if
		"vue/max-attributes-per-line": [1, {
			"singleline": 3, //当开始标记在一行中时每行的最大属性数,默认是1
			"multiline": {
				"max": 1, //当开始标记位于多行时每行的最大属性数,默认是1
				"allowFirstLine": true //它允许是否存在与html标签名称在同一行上的第一个属性,默认是false
			}
		}], //限制每行的最大属性个数
		"vue/attributes-order": 0, //强制执行属性顺序
		"vue/html-self-closing": 0, //强制html标签自我闭合
		"vue/html-closing-bracket-newline": 0, //在标记的右括号之前要求或禁止换行符
		"vue/valid-v-for": 0, //此规则检查每个v-for指令是否有效
		"vue/singleline-html-element-content-newline": 0, //禁用在单行元素的内容之前和之后强制换行
		"vue/multiline-html-element-content-newline": 0, //禁用在多行元素的内容之前和之后强制换行
		"vue/component-name-in-template-casing": 0, //禁用模板标签名称强制驼峰命名
		"vue/require-default-prop": 0, //禁用组件中 props 默认值的设置要求
	}
}