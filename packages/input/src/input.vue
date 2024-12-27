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
    disabled: {
      type: Boolean,
      default: false,
    },
    showPassword: {
      type: Boolean,
      default: false,
    },
    clearable: {
      type: Boolean,
      default: false,
    },
    prefixIcon: {
      type: String,
    },
    suffixIcon: {
      type: String,
    },
  },
  data() {
    return {
      isPasswordVisible: false,
      isClearVisible: false,
    };
  },
  mounted() {
    this.setNativeInputValue();
  },
  computed: {
    isDisabled() {
      return this.disabled;
    },
    getPasswordVisible() {
      return this.showPassword && !this.isDisabled;
    },
    getClearVisible() {
      console.log(
        this.clearable && this.value && !this.isDisabled,
        this.clearable,
        this.value,
        this.isDisabled
      );
      return this.clearable && this.value && !this.isDisabled;
    },
    isSuffixVisible() {
      return this.suffixIcon || this.$slots.suffix || this.showPassword;
    },
    nativeInputValue() {
      return this.value === null || this.value === undefined
        ? ""
        : String(this.value);
    },
  },
  watch: {
    nativeInputValue() {
      this.setNativeInputValue();
    },
  },
  methods: {
    getInput() {
      return this.$refs.input || this.$refs.textarea;
    },
    focus() {
      this.getInput().focus();
    },
    blur() {
      this.getInput().blur();
    },
    select() {
      this.getInput().select();
    },
    // 设置原生输入框的值
    setNativeInputValue() {
      const input = this.getInput();
      if (!input) return;
      if (input.value === this.nativeInputValue) return;
      input.value = this.nativeInputValue;
    },
    handlePasswordVisible() {
      this.isPasswordVisible = !this.isPasswordVisible;
      console.log(this.isPasswordVisible, "handlePasswordVisible");
    },
    handleClear() {
      this.$emit("input", "");
      this.$emit("change", "");
      this.$emit("clear");
      this.$refs.input.focus();
    },
    handleInput(e) {
      if (e.target.value === this.nativeInputValue) return;
      this.$emit("input", e.target.value);
      this.$nextTick(this.setNativeInputValue);
    },
    handleChange(e) {
      this.$emit("change", e.target.value);
    },
  },
};
</script>

<template>
  <div
    class="w-input"
    :class="[
      type ? `w-input--${type}` : '',
      disabled ? 'is-disabled' : '',
      $slots.prefix || prefixIcon ? 'w-input--prefix' : '',
      $slots.suffix || suffixIcon ? 'w-input--suffix' : '',
      $slots.prepend ? 'w-input--prepend' : '',
      $slots.append ? 'w-input--append' : '',
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
          class="w-input__icon w-input__prefix-icon"
        ></w-icon>
      </span>
      <input
        ref="input"
        class="w-input__inner"
        :type="showPassword ? (isPasswordVisible ? 'text' : 'password') : type"
        v-bind="$attrs"
        @input="handleInput"
        @change="handleChange"
      />
      <!-- 后置内容 -->
      <span class="w-input__suffix" v-if="isSuffixVisible">
        <span class="w-input__suffix-inner">
          <template v-if="!getPasswordVisible || !getClearVisible">
            <slot name="suffix"></slot>
            <w-icon
              v-if="suffixIcon"
              :name="suffixIcon"
              size="14px"
              color="#969696"
              class="w-input__icon w-input__suffix-icon"
            ></w-icon>
          </template>
          <!-- 密码框眼睛按钮 -->
          <w-icon
            v-if="type === 'password' && isPasswordVisible"
            name="eye"
            size="14px"
            color="#969696"
            class="w-input__icon w-input__suffix-icon"
            style="cursor: pointer"
            @click="handlePasswordVisible"
          ></w-icon>
          <w-icon
            v-if="type === 'password' && !isPasswordVisible"
            name="eye-slash"
            size="14px"
            color="#969696"
            class="w-input__icon w-input__suffix-icon"
            style="cursor: pointer"
            @click="handlePasswordVisible"
          ></w-icon>
          <!-- 清空图标 -->
          <w-icon
            v-if="clearable && !showPassword && value"
            name="circle-xmark"
            size="14px"
            color="#969696"
            class="w-input__icon w-input__suffix-icon-clear"
            style="cursor: pointer"
            @click="handleClear"
          ></w-icon>
        </span>
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
  width: 100%;
  height: 32px;
  line-height: 32px;
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
    top: 0;
  }
  .w-input__suffix {
    position: absolute;
    display: flex;
    height: 100%;
    align-items: center;
    right: 12px;
    top: 0;
    .w-input__suffix-inner {
      position: relative;
      .w-input__suffix-icon-clear {
        position: absolute;
        right: 22px;
        top: 0;
        width: 14px;
      }
    }
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
