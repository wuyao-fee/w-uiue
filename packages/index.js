import Button from "./button/src/button.vue";
import SvgIcon from "./svg-icon/src/svg-icon.vue";
import { importAllSvg } from "./svg-icon/index";

// 导入所有SVG
importAllSvg();

// 组件列表
const components = [Button, SvgIcon];

// 定义 install 方法
const install = function (Vue) {
  // 判断是否安装过
  if (install.installed) return;
  install.installed = true;

  // 遍历注册全局组件
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

// 检测到 Vue 才执行
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  install,
  Button,
  SvgIcon,
};
