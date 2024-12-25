import WUI from "../../lib/w-uiue.umd.min.js";
import "../../lib/w-uiue.css";
import "@fortawesome/fontawesome-free/css/all.css";
import iconJson from '../../icon.json';
import { copyToClipboard } from "../../packages/theme-chalk/src/utils/tool.js";

const commonSvgRequire = require.context(
  "../../packages/theme-chalk/src/images/svg/common",
  false,
  /\.svg$/
);
const tipSvgRequire = require.context(
  "../../packages/theme-chalk/src/images/svg/tip",
  false,
  /\.svg$/
);

// 获取SVG图标名称
export function getSvgIconNames(svgRequire) {
  try {
    return svgRequire?.keys()?.map((item) => {
      return item.replace(/^\.\/(.*?)\.svg$/, "$1");
    });
  } catch (error) {
    console.error("获取SVG图标名称失败:", error);
    return [];
  }
}

// icon插件
const IconPlugin = {
  install(Vue) {
    // 遍历iconJson
    const iconObject = {};
    for (const key in iconJson) {
      iconObject[key] = iconJson[key];
    }
    Vue.prototype.$icon = {
      // common: iconJson.common,
      // tip: iconJson.tip
      ...iconObject
    };
  }
}

export default async ({ Vue, router }) => {
  if (typeof process === "undefined") {
    Vue.use(WUI);
    Vue.use(IconPlugin);
    Vue.prototype.$commonSvgIcon = getSvgIconNames(commonSvgRequire);
    Vue.prototype.$tipSvgIcon = getSvgIconNames(tipSvgRequire);
    Vue.prototype.$copyToClipboard = copyToClipboard;
  }
  router.beforeEach((to, from, next) => {
    // 触发百度的pv统计
    if (typeof _hmt !== "undefined") {
      if (to.path) {
        _hmt.push(["_trackPageview", to.fullPath]);
      }
    }
    next();
  })
};
