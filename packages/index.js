import Button from "./button/src/button.vue";
import SvgIcon from "./svg-icon/src/svg-icon.vue";
import Divider from "./divider/src/divider.vue";
import Card from "./card/src/card.vue";
import Descriptions from "./descriptions/src/descriptions.vue";
import DescriptionsItem from "./descriptions-item/src/descriptions-item.vue";
import Icon from "./icon/src/icon.vue";
import Message from "./message/index.js";
import { importAllSvg } from "./svg-icon/index";
// 导入所有SVG
importAllSvg();

// 组件列表
const components = [
  Button,
  SvgIcon,
  Divider,
  Card,
  Descriptions,
  DescriptionsItem,
  Icon,
  Message,
];

// 定义 install 方法
const install = function (Vue) {
  // 判断是否安装过
  if (install.installed) return;
  install.installed = true;

  // 遍历注册全局组件
  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$message = Message;
};

// 检测到 Vue 才执行
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

// 默认导出
export default {
  install,
  Button,
  SvgIcon,
  Divider,
  Card,
  Descriptions,
  DescriptionsItem,
  Icon,
  Message,
};
