<script>
import WSvgIcon from "../../svg-icon/src/svg-icon.vue";
export default {
  name: "WButton",
  components: { WSvgIcon },
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
    loading: {
      type: Boolean,
      default: false,
    },
    // 判断是否有loading，内部自行维护加载状态
    // 注意：使用该属性，点击事件需要返回一个promise
    hasLoading: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localLoading: false,
    };
  },
  methods: {
    async handleClick(evt) {
      // 判断是否有loading，内部自行维护加载状态，使用promise
      if (this.hasLoading) {
        try {
          this.localLoading = true;
          await this.$listeners?.click(evt);
        } catch (error) {
          console.log(error);
        } finally {
          this.localLoading = false;
        }
      } else {
        this.$emit("click", evt);
      }
    },
  },
};
</script>

<template>
  <button
    class="w-button"
    @click="handleClick"
    :disabled="disabled || loading || localLoading"
    :class="[
      type ? `w-button--${type}` : '',
      size ? `w-button--${size}` : '',
      disabled || loading || localLoading ? 'w-button--disabled' : '',
    ]"
  >
    <w-svg-icon name="line-loading" v-if="loading || localLoading"></w-svg-icon>
    <span v-if="$slots.default"><slot></slot></span>
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
  display: flex;
  align-items: center;
}
.w-button--default {
  color: $second-text-color;
  background-color: $white-color;
  border: $border;
  // 不能是禁用状态
  &:not(.w-button--disabled):hover {
    color: $hover-base-color;
    border-color: $hover-base-color;
  }
  // 不能是禁用状态
  &:not(.w-button--disabled):active {
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
  &:not(.w-button--disabled):hover {
    color: $hover-base-color;
    border-color: $hover-base-color;
  }
  &:not(.w-button--disabled):active {
    color: $active-base-color;
    border-color: $active-base-color;
  }
}
.w-button--text {
  color: $primary-base-color;
  border: none;
  padding: 0 !important;
  background: none !important;
  &:not(.w-button--disabled):hover {
    color: $hover-base-color;
  }
  &:not(.w-button--disabled):active {
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
  &:hover,
  &:active {
    border-color: none;
    background-color: none;
  }
}
.w-button--medium {
  padding: 6px 20px;
  font-size: $font-size;
  line-height: $line-height;
  height: $button-height;
}
.w-button--small {
  padding: 4px 20px;
  font-size: $font-size--small;
  line-height: $line-height--small;
  height: $button-height--small;
}
.w-button--large {
  padding: 8px 20px;
  font-size: $font-size--large;
  line-height: $line-height--large;
  height: $button-height--large;
}
</style>
