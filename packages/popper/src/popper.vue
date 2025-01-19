<script>
import VuePopper from "vue-popperjs";
import "vue-popperjs/dist/vue-popper.css";
export default {
  name: "WPopper",
  inheritAttrs: false,
  components: {
    VuePopper,
  },
  props: {
    content: {
      type: String,
      default: "",
    },
    placement: {
      type: String,
      default: "bottom",
      validate: function (value) {
        return [
          "auto",
          "top",
          "right",
          "bottom",
          "left",
          "auto-start",
          "auto-end",
          "top-start",
          "top-end",
          "right-start",
          "right-end",
          "bottom-start",
          "bottom-end",
          "left-start",
          "left-end",
        ].includes(value);
      },
    },
    trigger: {
      type: String,
      default: "clickToOpen",
      validate: function (value) {
        return [
          "clickToOpen",
          "hover",
          "clickToToggle",
          "click",
          "focus",
        ].includes(value);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    // 是否展示箭头
    visibleArrow: {
      type: Boolean,
      default: true,
    },
    // 自定义类名
    popperClass: {
      type: String,
      default: "",
    },
    // 宽度
    width: {
      type: String,
      default: "auto",
    },
  },
};
</script>

<template>
  <div class="w-popper">
    <vue-popper
      :disabled="disabled"
      :visible-arrow="visibleArrow"
      :trigger="trigger"
      :append-to-body="true"
      :options="{
        placement: placement,
        modifiers: { offset: { offset: '0,10px' } },
      }"
    >
      <div class="popper" :class="popperClass" :style="{ width: width }">
        <slot>{{ content }}</slot>
      </div>

      <template #reference>
        <slot name="reference"></slot>
      </template>
    </vue-popper>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/common.scss";
.popper {
  min-width: 150px;
  background: #fff;
  padding: 4px 16px;
  border-radius: 4px;
  box-shadow: 0 2px 12px 0 rgba(0, 0, 0, 0.1);
  font-size: 12px;
  line-height: 1.2;
  line-height: 22px;
  word-break: break-all;

  &[x-placement^="top"] {
    margin-bottom: 4px;
    // transform: translate3D(4px, 25px, 0px) !important;
  }

  &[x-placement^="bottom"] {
    margin-top: 4px;
    // transform: translate3D(7px, 40px, 0px) !important;
    .popper__arrow {
      border-bottom-color: rgba(0, 0, 0, 0.1);
    }
  }

  &[x-placement^="left"] {
    margin-right: 4px;
  }

  &[x-placement^="right"] {
    margin-left: 4px;
  }
}

.popper[x-placement^="top"] ::v-deep .popper__arrow {
  border-top-color: #fff;
}

.popper[x-placement^="bottom"] ::v-deep .popper__arrow {
  border-bottom-color: #fff !important;
}

.popper[x-placement^="left"] .popper__arrow {
  border-left-color: #fff;
}

.popper[x-placement^="right"] .popper__arrow {
  border-right-color: #fff;
}
</style>
