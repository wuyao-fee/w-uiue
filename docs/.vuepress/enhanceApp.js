import WUI from "../../dist/w-uiue.umd.min.js";
import "../../dist/w-uiue.css";

export default async ({ Vue }) => {
  if (typeof process === "undefined") {
    Vue.use(WUI);
  }
};
