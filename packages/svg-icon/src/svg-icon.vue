<template>
  <div
    v-if="isExternal"
    :style="styleExternalIcon"
    class="svg-external-icon svg-icon"
    v-on="$listeners"
  />
  <svg v-else :class="svgClass" aria-hidden="true" v-on="$listeners">
    <use :xlink:href="iconName" />
  </svg>
</template>

<script>
export default {
  name: "WSvgIcon",
  props: {
    iconClass: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      default: "line",
    },
    className: {
      type: String,
      default: "",
    },
  },
  created() {},
  computed: {
    isExternal() {
      return this.isExternalF(this.iconClass);
    },
    iconName() {
      return `#icon-${this.type}-${this.iconClass}`;
    },
    svgClass() {
      if (this.className) {
        return "svg-icon " + this.className;
      } else {
        return "svg-icon";
      }
    },
    styleExternalIcon() {
      return {
        mask: `url(${this.iconClass}) no-repeat 50% 50%`,
        "-webkit-mask": `url(${this.iconClass}) no-repeat 50% 50%`,
      };
    },
  },
  methods: {
    isExternalF(path) {
      return /^(https?:|mailto:|tel:)/.test(path);
    },
  },
};
</script>

<style scoped>
.svg-icon {
  width: 1em;
  height: 1em;
  fill: currentColor;
  overflow: hidden;
}

.svg-external-icon {
  background-color: currentColor;
  mask-size: cover !important;
  display: inline-block;
}
</style>
