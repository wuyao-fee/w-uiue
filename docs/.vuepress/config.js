const navConfigJson = require("../../nav.config.json");
module.exports = {
  title: "w-uiue",
  description: "w-uiue前端组件库",
  // 打包目录生成在根目录docsDist下
  dest: "docsDist",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/logo.jpg" }], // 增加一个自定义的 favicon(网页标签的图标)
    // 注入百度统计脚本
    ["script", {},
      `var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?7c45c2c42d636d77d05c8a1fe97a34ef";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();`
    ]
  ],
  port: "6200", // 监听端口
  base: "/w-uiue/", // 这是部署到github相关的配置，部署子目录：/w-uiue/
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },
  themeConfig: {
    lastUpdated: '最后更新于', // 文档更新时间：每个文件git最后提交的时间
    nav: navConfigJson.nav,
    sidebar: navConfigJson.sidebar,
    sidebarDepth: 2, // 侧边栏显示2级
  },
  plugins: ["demo-container"],
};
