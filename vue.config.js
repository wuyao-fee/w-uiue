const { defineConfig } = require("@vue/cli-service");
const path = require("path");
module.exports = defineConfig({
  transpileDependencies: true,
  pages: {
    index: {
      entry: "examples/main.js",
      template: "public/index.html",
      filename: "index.html",
    },
  },
  chainWebpack: (config) => {
    config.module
      .rule("js")
      .include.add(path.resolve(__dirname, "packages"))
      .end()
      .use("babel")
      .loader("babel-loader")
      .tap((options) => {
        // 修改它的选项...
        return options;
      })
      .end();

    // 删除默认的svg规则
    config.module.rules.delete("svg");

    // 添加新的svg规则
    config.module
      .rule("svg-sprite")
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, "packages/theme-chalk/src/images/svg"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "w-icon-[name]",
      })
      .end()
      .use("svgo-loader")
      .loader("svgo-loader")
      .tap((options) => ({
        ...options,
        plugins: [
          {
            name: "removeAttrs",
            params: {
              attrs: ["fill", "stroke"],
            },
          },
          { name: 'removeComments', active: true }, // 移除注释
          { name: 'removeDesc', active: true }, // 移除描述标签
          { name: 'removeTitle', active: true }, // 移除标题标签
        ],
      }))
      .end();
  },
  css: {
    loaderOptions: {
      scss: {
        additionalData: `@import "./packages/theme-chalk/src/common/variables.scss";`,
      },
    },
  },
});
