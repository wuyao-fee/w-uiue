# w-uiue

#### 介绍

基于 vue2 的 uiue 组件库，参考联通 uiue 设计规范实现

组件库说明文档：http://113.45.180.231:6200/

版本：0.0.6

#### 文档首页

![文档首页](https://gitee.com/wuyao-fee/img/raw/master/index.png)

#### 软件架构

软件架构说明
node16.17.0 + vue2.6.14 + @vue/cli@5.0.8 + yarn@1.22.22 + sass + webpack5 + vuepress

#### 安装教程

```js
yarn add w-uiue -S
或者
npm install w-uiue -S
```

#### 使用说明

在 main.js 中写入以下内容：

```js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import WUIUE from "w-uiue";
// 引入样式文件, 注意：v0.0.4及以前版本使用该路径样式
import "w-uiue/dist/w-uiue.css";
// 引入样式文件, v0.0.5及以后版本使用该路径样式
import "w-uiue/lib/w-uiue.css";

Vue.config.productionTip = false;
Vue.use(WUIUE);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
```

以上代码便完成了 w-uiue 的引入。需要注意的是，样式文件需要单独引入，v0.0.5 版本及以后样式文件的路径不一样。
