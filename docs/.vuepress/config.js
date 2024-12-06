module.exports = {
  title: "w-uiue",
  description: "w-uiue前端组件库",
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
  base: "/", // 这是部署到github相关的配置
  markdown: {
    lineNumbers: false, // 代码块显示行号
  },
  themeConfig: {
    lastUpdated: '最后更新于', // 文档更新时间：每个文件git最后提交的时间
    nav: [
      // 导航栏配置
      { text: "首页", link: "/" },
      { text: "组件", link: "/components/install" },
      { text: "更新日志", link: "/guide/updateLog" },
    ],
    sidebar: {
      "/guide/": [
        {
          title: "更新日志",
          collapsable: false,
          path: "/guide/updateLog.md",
        }
      ],
      "/components/": [
        {
          title: "安装",
          collapsable: false,
          path: "/components/install.md",
        },
        {
          title: "Icon图标",
          collapsable: false,
          path: "/components/icon.md",
        },
        {
          title: "Button按钮",
          collapsable: false,
          path: "/components/button.md",
        },
        {
          title: "Divider分割线",
          collapsable: false,
          path: "/components/divider.md",
        },
        {
          title: "Card卡片",
          collapsable: false,
          path: "/components/card.md",
        },
      ],
    }, // 侧边栏配置
    sidebarDepth: 2, // 侧边栏显示2级
  },
  plugins: ["demo-container"],
};
