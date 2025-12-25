import WTeleport from "./src/teleport.vue";

/* istanbul ignore next */
WTeleport.install = function (Vue) {
  Vue.component(WTeleport.name, WTeleport);
};

export default WTeleport;
