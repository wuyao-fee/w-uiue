import WIcon from "./src/icon.vue";

/* istanbul ignore next */
WIcon.install = function (Vue) {
  Vue.component(WIcon.name, WIcon);
};

export default WIcon;
