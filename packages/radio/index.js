import WRadio from "./src/radio.vue";

/* istanbul ignore next */
WRadio.install = function (Vue) {
  Vue.component(WRadio.name, WRadio);
};

export default WRadio;
