import WScrollbar from "./src/scrollbar.vue";

/* istanbul ignore next */
WScrollbar.install = function (Vue) {
  Vue.component(WScrollbar.name, WScrollbar);
};

export default WScrollbar;
