<script>
import WIcon from "../../icon/src/icon.vue";
const typeMap = {
  success: "circle-check",
  info: "circle-info",
  warning: "circle-exclamation",
  error: "circle-xmark",
  help: "circle-question",
};
export default {
  name: "WMessage",
  components: { WIcon },
  data() {
    return {
      visible: false,
      message: "1111lorem ipsum dolor sit amet .",
      duration: 3000,
      type: "success",
      closed: false,
      timer: null,
    };
  },
  watch: {
    closed(newVal) {
      if (newVal) {
        this.visible = false;
      }
    },
  },
  mounted() {
    this.visible = true;
    this.startTimer();
  },
  computed: {
    getIconName() {
      if (this.type) {
        return typeMap[this.type];
      }
      return "";
    },
    getIconColor() {
      if (this.type) {
        return this.type;
      }
      return "";
    },
  },
  methods: {
    handleAfterLeave() {
      this.$destroy(true);
      this.$el.parentNode.removeChild(this.$el);
    },
    close() {
      this.closed = true;
      if (typeof this.onClose === "function") {
        this.onClose(this);
      }
    },
    clearTimer() {
      clearTimeout(this.timer);
    },
    startTimer() {
      if (this.duration > 0) {
        this.timer = setTimeout(() => {
          if (!this.closed) {
            this.close();
          }
        }, this.duration);
      }
    },
  },
};
</script>

<template>
  <transition @after-leave="handleAfterLeave" name="w-message-fade">
    <div class="w-message" :class="[`w-message--${type}`]" v-show="visible">
      <w-icon :name="getIconName" :class="[`w-message--${type}`]"></w-icon>
      <slot>
        <p class="w-message__content">{{ message }}</p>
      </slot>
    </div>
  </transition>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/common.scss";
.w-message {
  width: 380px;
  position: fixed;
  left: 50%;
  top: 20px;
  transform: translateX(-50%);
  line-height: 22px;
  padding: 9px 20px 9px 16px;
  box-sizing: border-box;
  border-radius: $radius;
  background-color: $disabled-text--success-color;
  display: flex;
  align-items: center;
  span {
    line-height: 22px;
    text-align: justify;
  }
  .w-icon {
    margin-right: 8px;
  }
  .w-message__content {
    margin: 0;
    max-height: 380px;
    overflow-y: auto;
    text-align: justify;
    overflow-anchor: none;
  }
  &--success {
    // 背景颜色浅一点
    background-color: lighten($disabled-text--success-color, 5%);
    color: $active-success-color !important;
  }
  &--error {
    background-color: lighten($disabled-text--danger-color, 5%);
    color: $active-danger-color !important;
  }
  &--warning {
    background-color: lighten($disabled-text--warning-color, 5%);
    color: $active-warning-color !important;
  }
  &--info {
    background-color: $disabled-text--info-color;
  }
  &--help {
    background-color: lighten($disabled-text--help-color, 5%);
    color: $active-help-color !important;
  }
}
.w-message-fade-enter-active,
.w-message-fade-leave-active {
  transition: opacity 0.3s ease, transform 0.3s ease;
}
.w-message-fade-enter {
  opacity: 0;
  transform: translate(-50%, -100%);
}
.w-message-fade-leave-to {
  opacity: 0;
  transform: translate(-50%, -100%);
}
</style>
