import WUI from "../../lib/w-uiue.umd.min.js";
import "../../lib/w-uiue.css";

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
    Vue.prototype.$icon = {
      common: ['common'],
      tip: ['tip']
    };
  }
}

export default async ({ Vue, router }) => {
  if (typeof process === "undefined") {
    Vue.use(WUI);
    Vue.use(IconPlugin);
    Vue.prototype.$commonSvgIcon = getSvgIconNames(commonSvgRequire);
    Vue.prototype.$tipSvgIcon = getSvgIconNames(tipSvgRequire);
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
