<script>
import WIcon from "../../icon/src/icon.vue";
export default {
  name: "WInput",
  components: { WIcon },
  props: {
    value: {
      type: [String, Number],
    },
    type: {
      type: String,
      default: "text",
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    prefixIcon: {
      type: String,
    },
  },
  data() {
    return {
      isPasswordVisible: false,
    };
  },
};
</script>

<template>
  <div
    class="w-input"
    :class="[
      type ? `w-input--${type}` : '',
      $slots.prefix || prefixIcon ? 'w-input--prefix' : '',
    ]"
  >
    <template v-if="type !== 'textarea'">
      <!-- 前置元素 -->
      <span class="w-input__prepend" v-if="$slots.prepend">
        <slot name="prepend"></slot>
      </span>
      <!-- 前置内容 -->
      <span class="w-input__prefix" v-if="$slots.prefix || prefixIcon">
        <slot name="prefix"></slot>
        <w-icon
          v-if="prefixIcon"
          :name="prefixIcon"
          size="14px"
          color="#969696"
        ></w-icon>
      </span>
      <input
        ref="input"
        class="w-input__inner"
        :type="showPassword ? (isPasswordVisible ? 'text' : 'password') : type"
        v-bind="$attrs"
      />
      <!-- 后置内容 -->
      <span class="w-input__suffix" v-if="$slots.suffix">
        <slot name="suffix"></slot>
      </span>
      <!-- 后置元素 -->
      <span class="w-input__append" v-if="$slots.append">
        <slot name="append"></slot>
      </span>
    </template>
    <textarea v-else ref="textarea" class="w-textarea__inner"></textarea>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/common.scss";
.w-input {
  box-sizing: border-box;
  position: relative;
  &.w-input--prefix {
    .w-input__inner {
      padding-left: 30px;
    }
  }
  .w-input__inner {
    width: 100%;
    height: 32px;
    line-height: 32px;
    box-sizing: border-box;
    border-radius: $radius;
    font-size: $font-size;
    color: $first-text-color;
    background-color: $white-color;
    border: 1px solid $border-color;
    padding: 5px 12px;
    outline: none;
    caret-color: $primary-base-color;
    &::-ms-reveal {
      display: none;
    }
    &:focus-visible,
    &:focus {
      outline: none;
      border-color: $primary-base-color;
    }
    &::placeholder {
      font-size: $font-size;
      color: $third-text-color;
    }
  }
  .w-input__prefix {
    position: absolute;
    display: flex;
    height: 100%;
    align-items: center;
    left: 12px;
  }
  .w-textarea__inner {
    width: 100%;
    box-sizing: border-box;
  }
}
::v-deep input {
  outline: none !important;
  box-shadow: none !important;
}
::v-deep .w-icon,
::v-deep .w-icon::before {
  display: block;
  width: 14px;
}
</style>
