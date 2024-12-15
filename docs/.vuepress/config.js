const navConfigJson = require("../../nav.config.json");
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
    nav: navConfigJson.nav,
    sidebar: navConfigJson.sidebar,
    // nav: [
    //   // 导航栏配置
    //   { text: "首页", link: "/" },
    //   { text: "指南", link: "/guide/install" },
    //   { text: "组件", link: "/components/svgIcon" },
    //   { text: "更新日志", link: "/guide/updateLog" },
    //   { text: "博客", link: "http://113.45.180.231/", target: "_blank" },
    // ],
    // sidebar: [
    //   {
    //     title: "指南",
    //     collapsable: false,
    //     children: [
    //       { title: '安装', path: '/guide/install.md', collapsable: false },
    //       { title: '快速开始', path: '/guide/quickstart.md', collapsable: false },
    //       { title: '更新日志', path: '/guide/updateLog.md', collapsable: false },
    //     ]
    //   },
    //   {
    //     title: "组件",
    //     collapsable: false,
    //     children: [
    //       { title: 'SvgIcon图标', path: '/components/svgIcon.md', collapsable: false },
    //       { title: 'Button按钮', path: '/components/button.md', collapsable: false },
    //       { title: 'Divider分割线', path: '/components/divider.md', collapsable: false },
    //       { title: 'Card卡片', path: '/components/card.md', collapsable: false },
    //       { title: 'Descriptions描述列表', path: '/components/descriptions.md', collapsable: false },
    //       { title: 'Icon图标', path: '/components/icon.md', collapsable: false },
    //     ]
    //   }
    // ],
    sidebarDepth: 2, // 侧边栏显示2级
  },
  plugins: ["demo-container"],
};
