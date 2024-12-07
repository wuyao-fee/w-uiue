import WDivider from "./src/divider.vue";

/* istanbul ignore next */
WDivider.install = function (Vue) {
  Vue.component(WDivider.name, WDivider);
};

export default WDivider;
