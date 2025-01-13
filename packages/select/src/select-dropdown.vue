<script>
import Popper from "../../theme-chalk/src/utils/vue-popper.js";
export default {
  name: "WSelectDropdown",
  mixins: [Popper],
  componentName: "WSelectDropdown",
  props: {
    placement: {
      default: "bottom-start",
    },
    boundariesPadding: {
      default: 0,
    },
    popperOptions: {
      default() {
        return {
          gpuAcceleration: false,
        };
      },
    },
    visibleArrow: {
      default: true,
    },
    appendToBody: {
      type: Boolean,
      default: true,
    },
  },
  data() {
    return {
      minWidth: "",
    };
  },
  computed: {
    popperClass() {
      return this.$parent.popperClass;
    },
  },
  watch: {
    "$parent.inputWidth"() {
      this.minWidth = this.$parent.$el.getBoundingClientRect().width + "px";
    },
  },
  mounted() {
    this.referenceElm = this.$parent.$refs.reference.$el;
    this.$parent.popperElm = this.popperElm = this.$el;
    this.$on("updatePopper", () => {
      if (this.$parent.visible) this.updatePopper();
    });
    this.$on("destroyPopper", this.destroyPopper);
  },
};
</script>

<template>
  <div
    class="w-select-dropdown w-popper"
    :class="[{ 'is-multiple': $parent.multiple }, popperClass]"
    :style="{ minWidth: minWidth }"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/variables.scss";
</style>
