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
    icon: {
      type: String,
      default: "",
    },
    // 特殊图标时设置，如：使用stroke绘制而不是fill填充的图标
    iconStroke: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      localLoading: false,
    };
  },
  computed: {
    // 处理icon名称
    iconClass() {
      return `w-icon-${this.icon}`;
    },
    // 设置icon大小
    iconSize() {
      if (this.size === "medium") {
        return 16;
      }
      if (this.size === "small") {
        return 14;
      }
      if (this.size === "large") {
        return 18;
      }
      return 16;
    },
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
      icon ? `w-button--icon` : '',
    ]"
  >
    <w-svg-icon
      name="line-loading"
      :size="iconSize"
      v-if="loading || localLoading"
      class="w-button--loading"
    ></w-svg-icon>
    <w-svg-icon
      :name="icon"
      color="#fff"
      :stroke="iconStroke"
      :size="iconSize"
      v-if="icon && !loading && !localLoading"
    ></w-svg-icon>
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/variables.scss";
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
// 内部有图标的按钮
.w-button--icon {
  padding-left: 16px;
  .w-svg-icon {
    margin-right: 4px;
  }
}
.w-button--loading {
  margin-right: 4px;
}
</style>
