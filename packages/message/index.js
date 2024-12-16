import WMessage from "./src/message.vue";

/* istanbul ignore next */
WMessage.install = function (Vue) {
  Vue.component(WMessage.name, WMessage);
};

export default WMessage;
