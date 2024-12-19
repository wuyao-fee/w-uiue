<script>
import {
  addResizeListener,
  removeResizeListener,
} from "../../theme-chalk/src/utils/resize-event.js";
import WBar from "./bar.vue";
function scrollbarWidth() {
  const scrollDiv = document.createElement("div");
  scrollDiv.style.width = "100px";
  scrollDiv.style.height = "100px";
  scrollDiv.style.overflow = "scroll";
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.offsetWidth - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
}
export default {
  name: "WScrollbar",
  components: {
    WBar,
  },
  props: {
    color: {
      type: String,
      default: "#cecece",
    },
    // 仅对垂直滚动条生效
    width: {
      type: String,
    },
    right: {
      type: String,
    },
    // 仅对水平滚动条生效
    height: {
      type: String,
    },
    bottom: {
      type: String,
    },
    native: {
      type: Boolean,
    },
    wrapStyle: {
      type: [Object, Array, String],
    },
    wrapClass: {
      type: String,
    },
    viewStyle: {
      type: Object,
    },
    viewClass: {
      type: String,
    },
    // 如果 container 尺寸不会发生变化，最好设置它可以优化性能
    noResize: {
      type: Boolean,
    },
    tag: {
      type: String,
      default: "div",
    },
  },
  data() {
    return {
      sizeWidth: "",
      sizeHeight: "",
      moveX: 0,
      moveY: 0,
      gutter: scrollbarWidth(),
    };
  },
  provide() {
    return {
      wScrollbar: this,
    };
  },
  computed: {
    wrap() {
      return this.$refs.wrap;
    },
  },
  mounted() {
    console.log(this.props, "mmm");
    if (this.native) {
      return;
    }
    this.$nextTick(this.update);
    if (this.noResize) {
      return;
    }
    addResizeListener(this.$refs.resize, this.update);
  },
  beforeDestroy() {
    if (this.native || this.noResize) {
      return;
    }
    removeResizeListener(this.$refs.resize, this.update);
  },
  methods: {
    handleScroll() {
      const wrap = this.wrap;
      if (wrap) {
        this.moveY = (wrap.scrollTop * 100) / wrap.clientHeight;
        this.moveX = (wrap.scrollLeft * 100) / wrap.clientWidth;
      }
    },
    update() {
      const wrap = this.wrap;
      if (!wrap) {
        return;
      }
      // const heightPercentage = (wrap.clientHeight * 100) / wrap.scrollHeight;
      // const widthPercentage = (wrap.clientWidth * 100) / wrap.scrollWidth;
      const heightPercentage = (wrap.clientHeight / wrap.scrollHeight) * 100;
      const widthPercentage = (wrap.clientWidth / wrap.scrollWidth) * 100;
      this.sizeHeight = heightPercentage < 100 ? `${heightPercentage}%` : "";
      this.sizeWidth = widthPercentage < 100 ? `${widthPercentage}%` : "";
    },
    onResize() {
      this.$nextTick(this.update);
    },
  },
};
</script>

<template>
  <div class="w-scrollbar">
    <div
      ref="wrap"
      class="w-scrollbar__wrap"
      :class="[wrapClass, gutter ? 'w-scrollbar__wrap--hidden-default' : '']"
      :style="wrapStyle"
      @scroll="handleScroll"
    >
      <div
        ref="resize"
        class="w-scrollbar__view"
        :class="[viewClass]"
        :style="viewStyle"
      >
        <slot></slot>
      </div>
    </div>
    <template v-if="!native">
      <w-bar
        v-if="sizeWidth"
        :move="moveX"
        :size="sizeWidth"
        :vertical="false"
      ></w-bar>
      <w-bar
        v-if="sizeHeight"
        :move="moveY"
        :size="sizeHeight"
        vertical
      ></w-bar>
    </template>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/common.scss";
.w-scrollbar {
  scrollbar-width: none; /* firefox */
  -ms-overflow-style: none; /* IE 10+ */
  overflow: hidden;
  position: relative;
  // overflow: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  &:hover,
  &:active,
  &:focus {
    > .w-scrollbar__bar {
      opacity: 1;
      transition: opacity 340ms ease-out;
    }
  }
  > .w-scrollbar__bar {
    opacity: 1;
    transition: opacity 340ms ease-out;
  }
  .w-scrollbar__wrap {
    overflow: scroll;
    height: 100%;
    &.w-scrollbar__wrap--hidden-default {
      scrollbar-width: none; /* firefox */
      -ms-overflow-style: none; /* IE 10+ */
      &::-webkit-scrollbar {
        width: 0;
        height: 0;
      }
    }
  }
}
</style>
