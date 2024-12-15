<script>
export default {
  name: "WIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    // 图标大小，默认继承父元素，也可使用font awesome提供的尺寸，如xs(12px)、sm(14px)、lg(20px)、xl(24px)等
    // 或者自己使用style设置font-size
    size: {
      type: String,
    },
    color: {
      type: String,
      default: "#595959",
    },
    // 图标翻转：水平翻转（horizontal）、垂直翻转（vertical）、水平垂直翻转（both）
    flip: {
      type: String,
      default: "",
    },
    // 图标旋转角度，单位deg
    rotate: {
      type: [Number, String],
    },
    // 图标是否自动旋转
    spin: {
      type: Boolean,
      default: false,
    },
    // 图标是否脉冲，八步旋转
    pulse: {
      type: Boolean,
      default: false,
    },
  },
  computed: {
    getStyle() {
      // rotate没有传递时，不设置transform
      if (this.rotate) {
        return {
          color: this.color,
          transform: `rotate(${this.rotate}deg)`,
        };
      } else {
        return {
          color: this.color,
        };
      }
    },
  },
};
</script>

<template>
  <i
    class="w-icon fa-solid fa-fw"
    :class="[
      `fa-${name}`,
      size ? `fa-${size}` : '',
      flip ? `fa-flip-${flip}` : '',
      rotate ? `fa-rotate-${rotate}` : '',
      spin ? 'fa-spin' : '',
      pulse ? 'fa-pulse' : '',
    ]"
    :style="getStyle"
  ></i>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/variables.scss";
</style>
