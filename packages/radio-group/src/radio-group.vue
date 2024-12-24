<script>
import Emitter from "../../theme-chalk/src/mixins/emitter.js";
export default {
  name: "WRadioGroup",
  componentName: "WRadioGroup",
  mixins: [Emitter],
  props: {
    value: {
      required: true,
      type: [String, Number, Boolean],
    },
    disabled: {
      type: Boolean,
    },
    border: {
      type: Boolean,
    },
    fill: {
      type: Boolean,
    },
  },
  created() {
    this.$on("handleChange", (value) => {
      this.$emit("change", value);
    });
  },
  provide() {
    return {
      radioGroup: this,
    };
  },
  mounted() {
    // 当radioGroup没有默认选项时，第一个可以选中Tab导航
    const radios = this.$el.querySelectorAll("[type=radio]");
    const firstLabel = this.$el.querySelectorAll("[role=radio]")[0];
    if (![].some.call(radios, (radio) => radio.checked) && firstLabel) {
      firstLabel.tabIndex = 0;
    }
  },
};
</script>

<template>
  <div
    class="w-radio-group"
    :class="[
      disabled ? 'is-disabled' : '',
      border ? 'is-group-border' : '',
      fill ? 'is-group-fill' : '',
    ]"
  >
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/variables.scss";
.w-radio-group {
  display: flex;
}
</style>
