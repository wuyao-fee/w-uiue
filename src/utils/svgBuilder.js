const svgRequire = require.context("../../packages/svg", false, /\.svg$/);

// 获取所有SVG图标名称
export function getSvgIconNames() {
  try {
    return svgRequire.keys().map((item) => {
      return item.replace(/^\.\/(.*?)\.svg$/, "$1");
    });
  } catch (error) {
    console.error("获取SVG图标名称失败:", error);
    return [];
  }
}

// 导入所有SVG
export function importAllSvg() {
  try {
    svgRequire.keys().forEach(svgRequire);
  } catch (error) {
    console.error("导入SVG失败:", error);
  }
}
