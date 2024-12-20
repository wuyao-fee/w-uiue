import WRadioGroup from "./src/radio-group.vue";

/* istanbul ignore next */
WRadioGroup.install = function (Vue) {
  Vue.component(WRadioGroup.name, WRadioGroup);
};

export default WRadioGroup;
