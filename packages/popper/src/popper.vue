<script>
import VuePopper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
export default {
  name: "WPopper",
  components: {
    VuePopper,
  },
  props: {
    placement: {
      type: String,
      default: "bottom",
      validate: function (value) {
        return [
          "auto",
          "top",
          "right",
          "bottom",
          "left",
          "auto-start",
          "auto-end",
          "top-start",
          "top-end",
          "right-start",
          "right-end",
          "bottom-start",
          "bottom-end",
          "left-start",
          "left-end",
        ].includes(value);
      },
    },
    trigger: {
      type: String,
      default: "clickToOpen",
      validate: function (value) {
        return [
          "clickToOpen",
          "hover",
          "clickToToggle",
          "click",
          "focus",
        ].includes(value);
      },
    },
  },
};
</script>

<template>
  <div class="w-popper">
    <vue-popper
      :trigger="trigger"
      :options="{
        placement: placement,
        modifiers: { offset: { offset: '0,10px' } },
      }"
    >
      <div class="popper"><slot></slot></div>

      <w-button slot="reference">参考元素</w-button>
    </vue-popper>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/common.scss";
</style>
