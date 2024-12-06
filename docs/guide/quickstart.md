# 快速开始

本节将介绍如何在项目中使用 w-uiue。

### 完全引入

在 main.js 中写入以下内容：
```js
import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import WUIUE from "w-uiue";
import 'w-uiue/dist/w-uiue.css';

Vue.config.productionTip = false;
Vue.use(WUIUE);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
```
以上代码便完成了 w-uiue 的引入。需要注意的是，样式文件需要单独引入。

### 按需引入

目前版本暂不支持按需引入。


### 开始使用

至此，一个基于 Vue 和 w-uiue 的开发环境已经搭建完毕，现在就可以编写代码了。各个组件的使用方法请参阅它们各自的文档。