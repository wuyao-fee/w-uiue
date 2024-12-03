<template>
  <svg :style="svgStyle" aria-hidden="true" class="w-svg-icon">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script>
export default {
  name: "WSvgIcon",
  props: {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      default: "currentColor",
    },
    size: {
      type: [Number, String],
      default: 16,
    },
  },
  computed: {
    symbolId() {
      return `#w-icon-${this.name}`;
    },
    svgStyle() {
      return {
        width: typeof this.size === "number" ? `${this.size}px` : this.size,
        height: typeof this.size === "number" ? `${this.size}px` : this.size,
        fill: this.color,
        verticalAlign: "middle",
      };
    },
  },
};
</script>

<style>
.w-svg-icon {
  display: inline-block;
}
</style>
