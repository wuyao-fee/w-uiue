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

export default async ({ Vue }) => {
  if (typeof process === "undefined") {
    Vue.use(WUI);
    Vue.prototype.$commonIcon = getSvgIconNames(commonSvgRequire);
    Vue.prototype.$tipIcon = getSvgIconNames(tipSvgRequire);
  }
};
