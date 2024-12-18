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
      message: "",
      duration: 3000,
      type: "success",
      closed: false,
      timer: null,
      onClose: null,
      showClose: false,
      verticalOffset: 20,
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
    document.addEventListener("keydown", this.keydown);
  },
  beforeDestroy() {
    document.removeEventListener("keydown", this.keydown);
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
    positionStyle() {
      return {
        top: `${this.verticalOffset}px`,
      };
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
    keydown(e) {
      if (e.keyCode === 27) {
        // esc关闭消息
        if (!this.closed) {
          this.close();
        }
      }
    },
  },
};
</script>

<template>
  <transition @after-leave="handleAfterLeave" name="w-message-fade">
    <div
      class="w-message"
      :class="[`w-message--${type}`, showClose ? 'is-closable' : '']"
      :style="positionStyle"
      v-show="visible"
    >
      <w-icon :name="getIconName" :class="[`w-message--${type}`]"></w-icon>
      <slot>
        <p class="w-message__content">{{ message }}</p>
      </slot>
      <w-icon
        name="xmark"
        class="w-message__close"
        v-if="showClose"
        @click="close"
      ></w-icon>
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
  font-size: $font-size;
  font-family: $font-family;
  box-shadow: $shadow-message;
  z-index: 9999;
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
    line-height: 22px;
    font-size: $font-size;
    font-family: $font-family;
    color: $second-text-color;
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
  .w-message__close {
    margin-left: auto;
    margin-right: 0;
    cursor: pointer;
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
