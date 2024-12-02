import WSvgIcon from "./src/svg-icon.vue";

/* istanbul ignore next */
WSvgIcon.install = function (Vue) {
  Vue.component(WSvgIcon.name, WSvgIcon);
};

const req = require.context("../svg", true, /\.svg$/);
const requireAll = (requireContext) =>
  requireContext.keys().map(requireContext);
requireAll(req);
console.log(requireAll(req));

export default WSvgIcon;
