import WSelect from "./src/select.vue";

/* istanbul ignore next */
WSelect.install = function (Vue) {
  Vue.component(WSelect.name, WSelect);
};

export default WSelect;
