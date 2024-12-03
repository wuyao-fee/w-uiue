module.exports = {
  title: "WUI",
  description: "wui前端组件库",
  head: [
    // 注入到当前页面的 HTML <head> 中的标签
    ["link", { rel: "icon", href: "/logo.jpg" }], // 增加一个自定义的 favicon(网页标签的图标)
  ],
  port: "6200", // 监听端口
  base: "/", // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },
  themeConfig: {
    nav: [
      // 导航栏配置
      { text: "首页", link: "/" },
      { text: "组件", link: "/components/" },
    ],
    sidebar: {
      "/components/": [
        "/components/",
        "/components/button.md"
      ]
    }, // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
  plugins: ["demo-container"],
};
