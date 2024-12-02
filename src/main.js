import Vue from "vue";
import WSvgIcon from "./components/WSvgIcon";
import { importAllSvg } from "./utils/svgBuilder";

// 注册全局组件
Vue.component("WSvgIcon", WSvgIcon);

// 导入所有SVG图标
importAllSvg();
