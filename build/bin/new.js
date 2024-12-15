// 引入相关模块
const path = require("path");
const fileSave = require("file-save");
const uppercamelcase = require("uppercamelcase");
const fs = require("fs").promises;

function upperCamelToLowerCase(str) {
  if (!str || typeof str !== "string") return str;
  // 确保字符串的第一个字符是小写的，其余部分保持不变
  return str.charAt(0).toLowerCase() + str.slice(1);
}

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
// 绝对路径: 定位到你项目的packages目录下
const PackagePath = path.resolve(__dirname, "../../packages", componentName);

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
  name: 'W${componentNameUppercase}'
}
</script>

<template>
  <div class='w-${componentName}'>${componentName}</div>
</template>

<style lang='scss' scoped>
@import '../../../packages/theme-chalk/src/common/variables.scss';
</style>
`;

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

// 循环创建定义的文件
Files.forEach((file) => {
  fileSave(path.join(PackagePath, file.filename))
    .write(file.content, "utf8")
    .end("\n");
});

// 创建组件文档
const DocsPath = path.resolve(
  __dirname,
  "../../docs/components",
  `${componentNameLowerCase}.md`
);
fileSave(DocsPath).write(`# ${componentNameUppercase}`, "utf8").end("\n");

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
      await fs.writeFile(
        filePath,
        JSON.stringify({ nav, sidebar }, null, 2),
        "utf-8"
      );
      console.log("添加完成：", newEntry);
    } else {
      console.log("已经存在：", newEntry.path);
    }
  } catch (error) {
    console.error("添加失败：", error);
  }
}

const filePath = path.resolve(__dirname, "../../nav.config.json");
const newEntry = {
  title: componentNameUppercase,
  path: `/components/${componentNameLowerCase}.md`,
  collapsable: false,
};

updateSidebarEntry(filePath, newEntry);
console.log(`组件${componentNameUppercase}创建成功！`);
