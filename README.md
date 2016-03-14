## 52 周玩转 52 Node 包 丨 browserify
🙊 [查看全部计划](PLAN.md)

**第 02 周（2016.03.14）** [browserify](https://www.npmjs.com/package/browserify) 篇

### browserify 简介
browserify 的作用是能让你在浏览器端跑 node-style 的代码，如：`require()`。它的原理是递归地分析应用中所有的 `require()` 调用，从而生成出一个能安置在浏览器 `<script>` 标签中集成包（bundle）文件。

在本周，我们将一起来学习这个组件，看看应当如何来使用它以及它的内部原理究竟是怎么实现的。

### 举例
撩一个 `main.js` 文件，然后加上 `require()` 语句试试。

~~~js
// main.js
// 这里用到了一个第三方的组件
var starwars = require('starwars-names-dothide');

var ele = document.getElementById('starwars');

// 刷一下网页就随机输出一个 Star Wars 的人物名
ele.textConent = starwars.random();
~~~

以上的js如果直接放在浏览器端运行是会报错的，因为浏览器端不认识 `require()` 方法，因此，我们需要利用 browserify 组件。

~~~bash
# 首先全局安装 browserify
$ npm i -g browserify

# 然后生成 bundle.js 文件
$ browserify main.js > bundle.js
~~~

接着我们编辑 `index.html` 文件，并引入 `bundle.js`

~~~html
<!-- index.html -->
<!DOCTYPE html>
<html>
<head>
  <title>Browserify</title>
</head>
<body>
  <p id="starwars"></p>
  <script type="text/javascript" src="bundle.js"></script>
</body>
</html>
~~~

这时，当我们打开 `index.html` 就能看到 `main.js` 的业务逻辑成功的在浏览器端运行了。

![Bundled](images/browserify-1.png)
