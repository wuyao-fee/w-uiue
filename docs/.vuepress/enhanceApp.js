import WUI from "../../dist/w-uiue.umd.min.js";
import "../../dist/w-uiue.css";

const commonSvgRequire = require.context(
  "../../packages/svg/common",
  false,
  /\.svg$/
);
const tipSvgRequire = require.context(
  "../../packages/svg/tip",
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

export default async ({ Vue, router }) => {
  if (typeof process === "undefined") {
    Vue.use(WUI);
    Vue.prototype.$commonIcon = getSvgIconNames(commonSvgRequire);
    Vue.prototype.$tipIcon = getSvgIconNames(tipSvgRequire);
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
