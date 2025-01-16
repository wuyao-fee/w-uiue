import WExpandableText from "./src/expandable-text.vue";

/* istanbul ignore next */
WExpandableText.install = function (Vue) {
  Vue.component(WExpandableText.name, WExpandableText);
};

export default WExpandableText;
