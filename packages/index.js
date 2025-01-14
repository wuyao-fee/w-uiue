import Button from "./button/src/button.vue";
import SvgIcon from "./svg-icon/src/svg-icon.vue";
import Divider from "./divider/src/divider.vue";
import Card from "./card/src/card.vue";
import Descriptions from "./descriptions/src/descriptions.vue";
import DescriptionsItem from "./descriptions-item/src/descriptions-item.vue";
import Icon from "./icon/src/icon.vue";
import Message from "./message/index.js";
import Scrollbar from "./scrollbar/src/scrollbar.vue";
import Radio from "./radio/src/radio.vue";
import RadioGroup from "./radio-group/src/radio-group.vue";
import Input from "./input/src/input.vue";
import Select from "./select/src/select.vue";
import Popper from "./popper/src/popper.vue";

import { importAllSvg } from "./svg-icon/index";
import {
  debounce,
  throttle,
  copyToClipboard,
  calculatePixels,
  UUIDv4,
  randomString,
  formatDate,
  deepClone,
  parseUrlParams,
  objectToUrlParams,
} from "./theme-chalk/src/utils/tool.js";
import {
  isFunction,
  isObject,
  getType,
  typeUtils,
} from "./theme-chalk/src/utils/types.js";
import to from "./theme-chalk/src/utils/to.js";
import createOverload from "./theme-chalk/src/utils/createOverload.js";
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
  Scrollbar,
  Radio,
  RadioGroup,
  Input,
  Select,
  Popper,
];

// 工具方法插件
const UtilsPlugin = {
  install(Vue) {
    Vue.prototype.$utils = {
      debounce,
      throttle,
      copyToClipboard,
      calculatePixels,
      isFunction,
      isObject,
      UUIDv4,
      randomString,
      formatDate,
      getType,
      isEmpty: typeUtils.isEmpty,
      isNull: typeUtils.isNull,
      isUndefined: typeUtils.isUndefined,
      isNumber: typeUtils.isNumber,
      isString: typeUtils.isString,
      isBoolean: typeUtils.isBoolean,
      deepClone,
      parseUrlParams,
      objectToUrlParams,
    };
    Vue.prototype.$to = to;
    Vue.prototype.$createOverload = createOverload;
  },
};

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
  Vue.use(UtilsPlugin);
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
  Scrollbar,
  Radio,
  RadioGroup,
  Input,
  Select,
  Popper,
};
