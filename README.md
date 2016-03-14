## 52 周玩转 52 Node 包 丨 browserify
🙊 [查看全部计划](PLAN.md)

**第 02 周（2016.03.14）** [browserify](https://www.npmjs.com/package/browserify) 篇

### browserify 简介
browserify 的作用是能让你在浏览器端跑 node-style 的代码，如：`require()`。它的原理是递归地分析应用中所有的 `require()` 调用，从而生成出一个能安置在浏览器 `<script>` 标签中集成包（bundle）文件。

在本周，我们将一起来学习这个组件，看看应当如何来使用它以及它的内部原理究竟是怎么实现的。

### 举例
撩一个 `main.js` 文件，然后加点 `require()` 语句试试。

~~~js
// main.js
// 这里用到了一个第三方的组件
var starwars = require('starwars-names-dothide');

var ele = document.getElementById('starwars');
ele.textConent = starwars.random();
~~~