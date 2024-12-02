<script>
export default {
  name: "WButton",
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "medium",
    },
    disabled: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <button
    class="w-button"
    :disabled="disabled"
    :class="[
      type ? `w-button--${type}` : '',
      size ? `w-button--${size}` : '',
      disabled ? 'w-button--disabled' : '',
    ]"
  >
    <span><slot></slot></span>
  </button>
</template>

<style lang="scss" scoped>
.w-button + .w-button {
  margin-left: 8px;
}
.w-button {
  border: none;
  border-radius: $radius;
  box-sizing: border-box;
  cursor: pointer;
}
.w-button--default {
  color: $second-text-color;
  background-color: $white-color;
  border: $border;
  &:hover {
    color: $hover-base-color;
    border-color: $hover-base-color;
  }
  &:active {
    color: $active-base-color;
    border-color: $active-base-color;
  }
}
.w-button--primary {
  color: $white-color;
  background-color: $primary-base-color;
  &:hover {
    background-color: $hover-base-color;
  }
  &:active {
    background-color: $active-base-color;
  }
}
.w-button--dashed {
  color: $second-text-color;
  background-color: $white-color;
  border: $border-dashed;
  &:hover {
    color: $hover-base-color;
    border-color: $hover-base-color;
  }
  &:active {
    color: $active-base-color;
    border-color: $active-base-color;
  }
}
.w-button--text {
  color: $primary-base-color;
  border: none;
  padding: 0 !important;
  background: none !important;
  &:hover {
    color: $hover-base-color;
  }
  &:active {
    color: $active-base-color;
  }
}
.w-button--disabled {
  cursor: not-allowed;
  &.w-button--default,
  &.w-button--primary,
  &.w-button--dashed {
    color: $third-text-color;
    background-color: $disabled-fill-color;
  }
  &.w-button--text {
    color: $third-text-color;
  }
}
.w-button--medium {
  padding: 6px 20px;
  font-size: $font-size;
  line-height: $line-height;
  height: $button-height;
}
</style>
