<script>
// import WSvgIcon from "../../svg-icon/src/svg-icon.vue";
import WIcon from "../../icon/src/icon.vue";
export default {
  name: "WButton",
  components: { WIcon },
  props: {
    type: {
      type: String,
      default: "default",
    },
    size: {
      type: String,
      default: "medium",
    },
    round: {
      type: Boolean,
    },
    circle: {
      type: Boolean,
    },
    plain: {
      type: Boolean,
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
      round ? 'is-round' : '',
      circle ? 'is-circle' : '',
      plain ? 'is-plain' : '',
    ]"
  >
    <!-- <w-svg-icon
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
    ></w-svg-icon> -->
    <w-icon
      name="spinner"
      pulse
      v-if="loading || localLoading"
      class="w-button--loading"
    ></w-icon>
    <w-icon
      :name="icon"
      color="#fff"
      v-if="icon && !loading && !localLoading"
    ></w-icon>
    <span v-if="$slots.default && !circle"><slot></slot></span>
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
@each $type, $theme in $button-colors {
  @if $type == "text" {
    .w-button--#{$type} {
      color: map-get($theme, color);
      border: none;
      padding: 0 !important;
      background: none !important;
      &:not(.w-button--disabled):hover {
        color: map-get($theme, hover-color);
      }
      &:not(.w-button--disabled):active {
        color: map-get($theme, active-color);
      }
    }
  } @else {
    .w-button--#{$type} {
      color: map-get($theme, color);
      background-color: map-get($theme, background-color);
      @if map-has-key($theme, "border-color") {
        border: 1px map-get($theme, border-style) map-get($theme, border-color);
      } @else {
        border: none;
      }
      &:not(.w-button--disabled):hover {
        color: map-get($theme, hover-color);
        border-color: map-get($theme, hover-border-color);
        @if map-has-key($theme, "hover-background-color") {
          background-color: map-get($theme, hover-background-color);
        }
      }
      &:not(.w-button--disabled):active {
        color: map-get($theme, active-color);
        border-color: map-get($theme, active-border-color);
        @if map-has-key($theme, "active-background-color") {
          background-color: map-get($theme, active-background-color);
        }
      }
    }
  }
  .w-button--#{$type}.is-plain {
    @if map-has-key($theme, "plain-color") {
      color: map-get($theme, plain-color);
    }
    @if map-has-key($theme, "plain-border-color") {
      border: 1px solid map-get($theme, plain-border-color);
    }
    @if map-has-key($theme, "plain-background-color") {
      background-color: map-get($theme, plain-background-color);
      &:not(.w-button--disabled):hover {
        border-color: map-get($theme, plain-hover-border-color);
        background-color: map-get($theme, plain-hover-background-color);
      }
      &:not(.w-button--disabled):active {
        border-color: map-get($theme, plain-active-border-color);
        background-color: map-get($theme, plain-active-background-color);
      }
    }
  }
  .w-button--#{$type}.w-button--disabled {
    cursor: not-allowed;
    color: map-get($theme, disabled-color);
    @if map-has-key($theme, "disabled-background-color") {
      background-color: map-get($theme, disabled-background-color);
    }
    @if map-has-key($theme, "disabled-border-color") {
      border-color: map-get($theme, disabled-border-color);
    } @else {
      border: none;
    }
    .w-icon {
      color: $second-icon-color !important;
    }
  }
}
.w-button--medium {
  padding: 6px 20px;
  font-size: $font-size;
  line-height: $line-height;
  height: $button-height;
  &.is-round {
    border-radius: $button-height / 2;
  }
  &.is-circle {
    border-radius: 50%;
    padding: $button-height / 2;
    &.w-button--icon {
      padding: ($button-height - $font-size) / 2;
      .w-icon {
        width: $font-size;
        height: $font-size;
      }
    }
  }
}
.w-button--small {
  padding: 4px 20px;
  font-size: $font-size--small;
  line-height: $line-height--small;
  height: $button-height--small;
  &.is-round {
    border-radius: $button-height--small / 2;
  }
  &.is-circle {
    border-radius: 50%;
    padding: $button-height--small / 2;
    &.w-button--icon {
      padding: ($button-height--small - $font-size--small) / 2;
      .w-icon {
        width: $font-size--small;
        height: $font-size--small;
      }
    }
  }
}
.w-button--large {
  padding: 8px 20px;
  font-size: $font-size--large;
  line-height: $line-height--large;
  height: $button-height--large;
  &.is-round {
    border-radius: $button-height--large / 2;
  }
  &.is-circle {
    border-radius: 50%;
    padding: $button-height--large / 2;
    &.w-button--icon {
      padding: ($button-height--large - $font-size--large) / 2;
      .w-icon {
        width: $font-size--large;
        height: $font-size--large;
      }
    }
  }
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
