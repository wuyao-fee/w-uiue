<script>
export default {
  name: "WDivider",
  props: {
    type: {
      type: String,
      default: "solid",
    },
    direction: {
      type: String,
      default: "horizontal",
    },
    // 分割线文字位置
    orientation: {
      type: String,
      default: "center",
      validator: (value) => ["left", "right", "center"].includes(value),
    },
    // 外边距
    margin: {
      type: [String, Number],
      default: "16",
    },
  },
  data() {
    return {};
  },
  computed: {
    // 计算外边距样式
    marginStyle() {
      if (this.direction === "horizontal") {
        return `${this.margin}px 0`;
      }
      if (this.direction === "vertical") {
        return `0 ${this.margin}px`;
      }
      return `${this.margin}px 0`;
    },
  },
  methods: {},
};
</script>

<template>
  <div
    class="w-divider"
    :class="[
      type ? `w-divider--${type}` : '',
      direction ? `w-divider--${direction}` : '',
      $slots.default ? 'w-divider--text' : '',
      orientation ? `w-divider--orientation-${orientation}` : '',
    ]"
    :style="{ margin: marginStyle }"
  >
    <span class="w-divider--text-inner" v-if="$slots.default"
      ><slot></slot
    ></span>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/variables.scss";
$border-type: solid;
.w-divider {
  box-sizing: border-box;
  border-block-start: 1px solid $line-color;
}
.w-divider--horizontal {
  width: 100%;
  height: 1px;
  margin: 16px 0;
  border-block-start: 1px solid $line-color;
}
.w-divider--vertical {
  width: 1px;
  margin: 0 16px;
  writing-mode: vertical-rl;
  border-inline-start: 1px solid $line-color;
}
.w-divider--solid {
  border-block-start: 1px solid $line-color;
  &.w-divider--text {
    border-block-start: 0 solid $line-color;
  }
}
.w-divider--dashed {
  border-block-start: 1px dashed $line-color;
  &.w-divider--text {
    border-block-start: 0 solid $line-color;
  }
}
.w-divider--dotted {
  border-block-start: 1px dotted $line-color;
  &.w-divider--text {
    border-block-start: 0 solid $line-color;
  }
}
.w-divider--text {
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  font-size: 14px;
  color: $second-text-color;

  &::before,
  &::after {
    content: "";
    flex: 1;
    border-top: 1px solid $line-color;
  }

  .w-divider--text-inner {
    background-color: #fff;
    padding: 0 1em;
    position: relative;
    top: -1px; /* 调整文本与线条的对齐 */
  }
}
.w-divider--text.w-divider--vertical {
  writing-mode: vertical-lr; // 确保文本垂直排列
  text-orientation: upright; // 文本保持直立（可选）

  &::before,
  &::after {
    border-top: none;
    border-left: 1px solid $line-color;
  }

  .w-divider--text-inner {
    // transform: rotate(-90deg); // 旋转文本以适应垂直方向
    white-space: nowrap;
    background-color: #fff;
    padding: 1em 0;
  }
}
.w-divider--text {
  display: flex;
  align-items: center;

  &.w-divider--orientation-left .w-divider--text-inner {
    &.w-divider--horizontal {
      margin-left: 0;
      margin-right: auto;
    }
  }

  &.w-divider--orientation-right .w-divider--text-inner {
    &.w-divider--horizontal {
      margin-left: auto;
      margin-right: 0;
    }
  }

  &.w-divider--orientation-center .w-divider--text-inner {
    &.w-divider--horizontal {
      margin-left: auto;
      margin-right: auto;
    }
  }

  &.w-divider--orientation-left {
    &::before {
      content: "";
      flex-grow: 1;
      border-top: 1px $border-type $line-color;
    }
    &::after {
      content: "";
      flex-grow: 20;
      border-top: 1px $border-type $line-color;
    }
    &.w-divider--vertical::before,
    &.w-divider--vertical::after {
      border-left: 1px $border-type $line-color;
    }
    &.w-divider--dashed::before,
    &.w-divider--dashed::after {
      border-top: 1px dashed $line-color;
    }
    &.w-divider--dotted::before,
    &.w-divider--dotted::after {
      border-top: 1px dotted $line-color;
    }
    &.w-divider--vertical {
      &.w-divider--dashed::before,
      &.w-divider--dashed::after {
        border-left: 1px dashed $line-color;
      }
      &.w-divider--solid::before,
      &.w-divider--solid::after {
        border-left: 1px solid $line-color;
      }
      &.w-divider--dotted::before,
      &.w-divider--dotted::after {
        border-left: 1px dotted $line-color;
      }
    }
  }

  &.w-divider--orientation-center {
    &::before,
    &::after {
      content: "";
      flex-grow: 1;
      border-top: 1px $border-type $line-color;
    }
    &.w-divider--dashed::before {
      border-top: 1px dashed $line-color;
    }
    &.w-divider--dashed::after {
      border-top: 1px dashed $line-color;
    }
    &.w-divider--dotted::before {
      border-top: 1px dotted $line-color;
    }
    &.w-divider--dotted::after {
      border-top: 1px dotted $line-color;
    }
    &.w-divider--vertical {
      &.w-divider--dashed::before,
      &.w-divider--dashed::after {
        border-left: 1px dashed $line-color;
      }
      &.w-divider--solid::before,
      &.w-divider--solid::after {
        border-left: 1px solid $line-color;
      }
      &.w-divider--dotted::before,
      &.w-divider--dotted::after {
        border-left: 1px dotted $line-color;
      }
    }
  }

  &.w-divider--orientation-right {
    &::before {
      content: "";
      flex-grow: 20;
      border-top: 1px $border-type $line-color;
    }
    &::after {
      content: "";
      flex-grow: 1;
      border-top: 1px $border-type $line-color;
    }
    &.w-divider--dashed::before {
      border-top: 1px dashed $line-color;
    }
    &.w-divider--dashed::after {
      border-top: 1px dashed $line-color;
    }
    &.w-divider--dotted::before {
      border-top: 1px dotted $line-color;
    }
    &.w-divider--dotted::after {
      border-top: 1px dotted $line-color;
    }
    &.w-divider--vertical {
      &.w-divider--dashed::before,
      &.w-divider--dashed::after {
        border-left: 1px dashed $line-color;
      }
      &.w-divider--solid::before,
      &.w-divider--solid::after {
        border-left: 1px solid $line-color;
      }
      &.w-divider--dotted::before,
      &.w-divider--dotted::after {
        border-left: 1px dotted $line-color;
      }
    }
  }

  .w-divider--text-inner {
    background-color: #fff;
    padding: 0 1em;
    position: relative;
    top: -1px; /* 调整文本与线条的对齐 */
  }
}
</style>
