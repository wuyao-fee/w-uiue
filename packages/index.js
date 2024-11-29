import Button from "./button/index";

const components = [Button];

const install = function (Vue) {
  // 全局注册组件
  components.forEach((component) => {
    Vue.component(component.name, component);
  });
};

/* istanbul ignore if */
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}

export default {
  version: "1.0.0",
  install,
  Button,
};
