import WPopper from "./src/popper.vue";

/* istanbul ignore next */
WPopper.install = function (Vue) {
  Vue.component(WPopper.name, WPopper);
};

export default WPopper;
