// 引入相关模块
const path = require("path");
const fileSave = require("file-save");
const uppercamelcase = require("uppercamelcase");
const fs = require("fs").promises;

// 监听命令行退出
process.on("exit", () => {
  console.log("命令行退出了");
});
// 执行 npm run new xxx 必须填写组件名, 否则直接结束命令
if (!process.argv[2]) {
  console.error("[组件名]必填 - 请按照`yarn new <component-name>`的格式来运行");
  process.exit(1);
}
// 获取第一个参数
const componentName = process.argv[2]; // svg-icon
const componentNameUppercase = uppercamelcase(componentName); // SvgIcon
const componentNameLowerCase = upperCamelToLowerCase(componentNameUppercase); // svgIcon

function upperCamelToLowerCase(str) {
  if (!str || typeof str !== "string") return str;
  // 确保字符串的第一个字符是小写的，其余部分保持不变
  return str.charAt(0).toLowerCase() + str.slice(1);
}

// 模板内容
const indexTemplate = `import W${componentNameUppercase} from "./src/${componentName}.vue";

/* istanbul ignore next */
W${componentNameUppercase}.install = function (Vue) {
    Vue.component(W${componentNameUppercase}.name, W${componentNameUppercase});
};

export default W${componentNameUppercase};
`;

const componentTemplate = `<script>
export default {
  name: "W${componentNameUppercase}"
}
</script>

<template>
  <div class="w-${componentName}">${componentName}</div>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/common.scss";
</style>
`;

// 其它导入模版
const otherImportTemplate = `
import { importAllSvg } from "./svg-icon/index";
import { debounce, throttle, copyToClipboard, calculatePixels } from "./theme-chalk/src/utils/tool.js";
import { isFunction, isObject } from "./theme-chalk/src/utils/types.js";
// 导入所有SVG
importAllSvg();
`;

// 工具方法插件模版
const toolPluginTemplate = `
// 工具方法插件
const UtilsPlugin = {
  install(Vue) {
    Vue.prototype.$utils = {
      debounce,
      throttle,
      copyToClipboard,
      calculatePixels,
      isFunction,
      isObject,
    }
  },
}
`;

const installTemplate = `
// 定义 install 方法
const install = function (Vue) {
  // 判断是否安装过
  if (install.installed) return;
  install.installed = true;

  // 遍历注册全局组件
  components.forEach((component) => {
    Vue.component(component.name, component);
  });

  Vue.prototype.$message = Message;
  Vue.use(UtilsPlugin);
};

// 检测到 Vue 才执行
if (typeof window !== "undefined" && window.Vue) {
  install(window.Vue);
}
`;

// 给components.json添加组件
async function updateComponentsJson(_filePath, _newEntry) {
  try {
    const fileContent = await fs.readFile(_filePath, "utf-8");
    const fileJson = JSON.parse(fileContent);
    // 判断是否存在
    for (const key in fileJson) {
      if (key === _newEntry.name) {
        console.log(`components.json文件中，${key}组件已存在`);
        return;
      }
    }
    fileJson[_newEntry.name] = _newEntry.path;
    return await fs.writeFile(
      _filePath,
      JSON.stringify(fileJson, null, 2),
      "utf-8"
    );
  } catch (err) {
    console.error("Error writing file:", err);
  }
}

// 更新侧边栏组件
async function updateSidebarEntry(filePath, newEntry) {
  try {
    const fileContent = await fs.readFile(filePath, "utf-8");
    let { nav, sidebar } = JSON.parse(fileContent);
    if (!sidebar[1]?.children) {
      sidebar[1] = { children: [] };
    }
    if (!sidebar[1].children.some((item) => item.path === newEntry.path)) {
      sidebar[1].children.push(newEntry);
      return await fs.writeFile(
        filePath,
        JSON.stringify({ nav, sidebar }, null, 2),
        "utf-8"
      );
    } else {
      console.log("已经存在：", newEntry.path);
    }
  } catch (error) {
    console.error("添加失败：", error);
  }
}

// 注册组件
async function registerComponent(_filePath) {
  try {
    const fileContent = await fs.readFile(_filePath, "utf-8");
    const fileJson = JSON.parse(fileContent);
    // 判断是否已经导入过组件
    // 对象遍历
    let packagesIndexContent = "";
    let packagesIndexComponentsContent = `// 组件列表\nconst components = [\n`;
    let exportDefaultContent = `// 默认导出\nexport default {\n  install,\n`;
    for (const key in fileJson) {
      // 组合生成packages/index.js文件
      packagesIndexContent += `import ${key} from "${fileJson[key]}";\n`;
      packagesIndexComponentsContent += `  ${key},\n`;
      exportDefaultContent += `  ${key},\n`;
    }
    // fs写入文件
    exportDefaultContent += `};`;
    // packagesIndexContent += `import { importAllSvg } from "./svg-icon/index";\n// 导入所有SVG\nimportAllSvg();\n\n`;
    packagesIndexContent += `${otherImportTemplate}\n`;
    packagesIndexContent += `${packagesIndexComponentsContent}];\n`;
    packagesIndexContent += `${toolPluginTemplate}\n`;
    packagesIndexContent += `${installTemplate}\n`;
    packagesIndexContent += exportDefaultContent + "\n";
    const indexPath = path.resolve(__dirname, "../../packages/index.js");
    return await fs.writeFile(indexPath, packagesIndexContent, "utf-8");
  } catch (err) {
    console.log(err);
  }
}

async function main() {
  const PackagePath = path.resolve(__dirname, "../../packages", componentName);

  // 定义需要创建的文件
  const Files = [
    {
      filename: "index.js",
      content: indexTemplate,
    },
    {
      filename: `src/${componentName}.vue`,
      content: componentTemplate,
    },
  ];

  try {
    // 循环创建定义的文件
    Files.forEach((file) => {
      fileSave(path.join(PackagePath, file.filename))
        .write(file.content, "utf8")
        .end("\n");
    });
    console.log(
      `01.packages/${componentName}/src/${componentName}.vue文件创建成功`
    );
    console.log(`02.packages/${componentName}/index.js文件创建成功`);

    // 更新components.json文件
    const componentsJsonPath = path.resolve(__dirname, "../../components.json");
    await updateComponentsJson(componentsJsonPath, {
      name: componentNameUppercase,
      path: `./${componentName}/src/${componentName}.vue`,
    });
    console.log(
      `03.components.json文件更新成功，添加${componentNameUppercase}组件路径`
    );

    // 创建组件文档
    const DocsPath = path.resolve(
      __dirname,
      "../../docs/components",
      `${componentNameLowerCase}.md`
    );
    fileSave(DocsPath).write(`# ${componentNameUppercase}`, "utf8").end("\n");
    console.log(
      `04.docs/components/${componentNameLowerCase}.md组件说明文档创建成功`
    );

    // 更新侧边栏
    const filePath = path.resolve(__dirname, "../../nav.config.json");
    const newEntry = {
      title: componentNameUppercase,
      path: `/components/${componentNameLowerCase}.md`,
      collapsable: false,
    };
    await updateSidebarEntry(filePath, newEntry);
    console.log(
      `05.docs/.vuepress/config.js文件侧边栏配置更新成功，添加${componentNameUppercase}侧边栏`
    );

    // 组件注册
    const componentsPath = path.resolve(__dirname, "../../components.json");
    await registerComponent(componentsPath, componentNameUppercase);
    console.log(`06.packages/index.js文件创建注册成功`);

    console.log("所有文件创建配置成功！！！");
  } catch (err) {
    console.log(err);
  }
}

main();
