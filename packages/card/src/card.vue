<script>
export default {
  name: "WCard",
  props: {
    // 主标题
    title: {
      type: String,
      default: "",
    },
    // 副标题
    subTitle: {
      type: String,
      default: "",
    },
    // 尺寸大小
    size: {
      type: String,
      default: "small",
      validator: (value) => {
        return ["small", "large"].includes(value);
      },
    },
    // 阴影显示时机
    shadow: {
      type: String,
      default: "always",
    },
    // 卡片距离底部的距离
    bottom: {
      type: [Number, String],
      default: 40,
    },
  },
  data() {
    return {};
  },
  methods: {},
};
</script>

<template>
  <div
    class="w-card"
    :class="[
      title || $slots.header ? 'w-card--has-header' : 'w-card--no-header',
      size ? `w-card--size-${size}` : '',
      shadow ? `w-card--shadow-${shadow}` : '',
    ]"
  >
    <div class="w-card-header" v-if="title || $slots.header">
      <div class="title" v-if="$slots.header"><slot name="header"></slot></div>
      <div class="title" v-else>{{ title }}</div>
      <div class="sub-title" v-if="$slots['sub-title']">
        <slot name="sub-title"></slot>
      </div>
      <div class="sub-title" v-if="subTitle && !$slots['sub-title']">
        {{ subTitle }}
      </div>
    </div>
    <div class="w-card-body" :style="`padding-bottom: ${bottom}px`">
      <slot></slot>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/variables.scss";
.w-card {
  background-color: #fff;
  border-radius: $radius;
  box-sizing: border-box;
  &.w-card--shadow-always {
    box-shadow: $shadow-card;
  }
  &.w-card--shadow-hover {
    &:hover {
      box-shadow: $shadow-card;
    }
  }
  &.w-card--shadow-never {
    box-shadow: none;
  }
}
.w-card-header {
  padding: 20px 16px 12px 16px;
  color: $first-text-color;
  font-family: $font-family;
  .title {
    height: 26px;
    line-height: 26px;
    font-size: 18px;
    font-weight: 600;
  }
  .sub-title {
    margin-top: 8px;
    height: 22px;
    line-height: 22px;
    font-size: 14px;
    font-weight: $font-weight;
    color: $second-text-color;
  }
}
.w-card--size-small {
  .w-card-header {
    .title {
      height: 26px;
      line-height: 26px;
      font-size: 18px;
      font-weight: 600;
    }
  }
}
.w-card--size-large {
  .w-card-header {
    .title {
      height: 28px;
      line-height: 28px;
      font-size: 20px;
      font-weight: 600;
    }
  }
}
.w-card-body {
  padding: 4px 16px 40px 16px;
  color: $second-text-color;
  font-size: 14px;
  font-family: $font-family;
  line-height: 22px;
  box-sizing: border-box;
  font-weight: $font-weight;
}
.w-card--no-header {
  .w-card-body {
    padding-top: 20px;
  }
}
</style>
