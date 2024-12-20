<script>
import Emitter from "../../theme-chalk/src/mixins/emitter.js";
export default {
  name: "WRadio",
  componentName: "WRadio",
  mixins: [Emitter],
  props: {
    value: {
      type: [String, Number, Boolean],
      default: "",
    },
    label: {
      type: [String, Number, Boolean],
      default: "",
    },
    disabled: {
      type: Boolean,
    },
    border: {
      type: Boolean,
    },
    fill: {
      type: Boolean,
    },
  },
  data() {
    return {
      radioGroup: null,
    };
  },
  computed: {
    model: {
      get() {
        return this.isGroup ? this.radioGroup.value : this.value;
      },
      set(val) {
        if (this.isGroup) {
          this.dispatch("WRadioGroup", "input", [val]);
        } else {
          this.$emit("input", val);
        }
        this.$refs.radio &&
          (this.$refs.radio.checked = this.model === this.label);
      },
    },
    isDisabled() {
      return this.isGroup
        ? this.radioGroup.disabled || this.disabled
        : this.disabled;
    },
    isGroup() {
      let parent = this.$parent;
      while (parent) {
        if (parent.$options.componentName !== "WRadioGroup") {
          parent = parent.$parent;
        } else {
          // this.radioGroup = parent; // 不能直接赋值，计算属性最好不要产生副作用，采用方法避免
          this.setRadioGroup(parent);
          return true;
        }
      }
      return false;
    },
  },
  mounted() {
    console.log(this.isGroup, "isGroup");
  },
  methods: {
    handleChange() {
      this.$nextTick(() => {
        this.$emit("change", this.model);
        this.isGroup &&
          this.dispatch("WRadioGroup", "handleChange", this.model);
      });
    },
    setRadioGroup(val) {
      this.radioGroup = val;
    },
  },
};
</script>

<template>
  <label
    class="w-radio"
    role="radio"
    :class="[
      { 'is-disabled': isDisabled },
      { 'is-checked': model === label },
      { 'is-border': border },
      { 'is-fill': fill },
    ]"
    :aria-checked="model === label"
    :aria-disabled="isDisabled"
  >
    <span class="w-radio__input">
      <span
        v-if="!(border || fill)"
        class="w-radio__inner"
        :class="[
          { 'is-disabled': isDisabled },
          { 'is-checked': model === label },
        ]"
      ></span>
      <input
        ref="radio"
        type="radio"
        class="w-radio__origin"
        aria-hidden="true"
        v-model="model"
        :value="label"
        :disabled="isDisabled"
        @change="handleChange"
      />
    </span>
    <span
      class="w-radio__label"
      :class="[
        { 'is-disabled': isDisabled },
        { 'is-checked': model === label },
      ]"
    >
      <slot></slot>
      <template v-if="!$slots.default">{{ label }}</template>
    </span>
  </label>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/common.scss";
.w-radio__origin {
  display: none;
}
.w-radio {
  display: flex;
  line-height: 22px;
  align-items: center;
  cursor: pointer;
  box-sizing: border-box;
  &__inner {
    position: relative;
    display: block;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    border: 1px solid $border-color;
    box-sizing: border-box;
    margin-right: 8px;
    &.is-disabled {
      border-color: $disabled-fill-color;
      cursor: not-allowed;
    }
    &.is-disabled.is-checked::after {
      position: absolute;
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: $disabled-fill-color;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
    }
    &:not(.is-disabled).is-checked {
      border-color: $primary-base-color;
    }
    &:not(.is-disabled).is-checked::after {
      position: absolute;
      content: "";
      display: block;
      width: 8px;
      height: 8px;
      border-radius: 50%;
      background-color: $primary-base-color;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      box-sizing: border-box;
    }
  }
  &__label {
    font-size: $font-size;
    color: $first-text-color;
    font-weight: $font-weight;
    &.is-disabled {
      color: $disabled-text-color;
      cursor: not-allowed;
    }
  }
  &:not(.is-disabled):hover {
    .w-radio__inner {
      border-color: $primary-base-color;
    }
  }
  &.is-border {
    padding: 6px 20px;
    border: 1px solid $border-color;
    border-radius: $radius;
    box-sizing: border-box;
    height: 34px;
    .w-radio__label {
      color: $second-text-color;
    }
    &:not(.is-disabled):hover,
    &:not(.is-disabled).is-checked {
      border-color: $active-base-color;
      .w-radio__label {
        color: $active-base-color;
      }
    }
    &.is-disabled {
      .w-radio__label {
        color: $disabled-text-color;
      }
    }
  }
  &.is-fill {
    padding: 6px 20px;
    border-radius: $radius;
    box-sizing: border-box;
    height: 34px;
    background-color: $background-fill-color;
    .w-radio__label {
      color: $second-text-color;
    }
    &:not(.is-disabled):hover,
    &:not(.is-disabled).is-checked {
      background-color: $primary-base-color;
      .w-radio__label {
        color: $white-color;
      }
    }
    &.is-disabled {
      background-color: $disabled-fill-color;
      .w-radio__label {
        color: $disabled-text-color;
      }
    }
  }
}
.w-radio + .w-radio {
  margin-left: 20px;
}
</style>
