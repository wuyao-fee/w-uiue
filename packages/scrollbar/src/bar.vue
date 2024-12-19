<script>
import { calculatePixels } from "../../theme-chalk/src/utils/tool.js";
export default {
  name: "WBar",
  props: {
    vertical: {
      type: Boolean,
    },
    size: {
      type: String,
    },
    move: {
      type: Number,
    },
  },
  inject: {
    wScrollbar: {
      default: () => ({}), // 提供一个空对象作为默认值
    },
  },
  computed: {
    bar() {
      return {
        horizontal: {
          key: "horizontal",
          axis: "x",
          offset: "offsetWidth",
          client: "clientX",
          direction: "left",
          scroll: "scrollLeft",
          scrollSize: "scrollWidth",
        },
        vertical: {
          key: "vertical",
          axis: "y",
          offset: "offsetHeight",
          client: "clientY",
          direction: "top",
          scroll: "scrollTop",
          scrollSize: "scrollHeight",
        },
      }[this.vertical ? "vertical" : "horizontal"];
    },
    trackStyle() {
      if (this.bar.key === "vertical") {
        const width = this.wScrollbar.width ? this.wScrollbar.width : "6px";
        return {
          // 仅vertical时，才有width属性
          width: width,
          right: this.wScrollbar.right
            ? calculatePixels(this.wScrollbar.right, width)
            : "2px",
        };
      } else {
        const height = this.wScrollbar.height ? this.wScrollbar.height : "6px";
        return {
          // 仅horizontal时，才有height属性
          height: height,
          bottom: this.wScrollbar.bottom
            ? calculatePixels(this.wScrollbar.bottom, height)
            : "8px",
        };
      }
    },
    thumbStyle() {
      const commonStyle = {
        transform: `translate${this.bar.axis.toUpperCase()}(${this.move}%)`,
        opacity: this.size !== "" ? 1 : 0,
        [this.bar.axis === "x" ? "width" : "height"]: this.size,
        backgroundColor: this.wScrollbar.color || "#cecece",
      };
      if (this.bar.key === "vertical") {
        return {
          ...commonStyle,
          // 仅vertical时，才有width属性
          width: this.wScrollbar.width ? this.wScrollbar.width : "6px",
        };
      } else {
        return {
          ...commonStyle,
          // 仅horizontal时，才有height属性
          height: this.wScrollbar.height ? this.wScrollbar.height : "6px",
        };
      }
    },
  },
  mounted() {
    console.log("mounted", this.wScrollbar.color);
  },
  destroyed() {
    document.removeEventListener("mouseup", this.handleMouseUpDocument);
  },
  methods: {
    handleClickThumb(e) {
      if (e.ctrlKey || e.button === 2) {
        return;
      }
      this.handleStartDrag(e);
    },
    handleClickTrack(e) {
      const offset = Math.abs(
        e.target.getBoundingClientRect()[this.bar.direction] -
          e[this.bar.client]
      );
      const thumbHalf = this.$refs.thumb[this.bar.offset] / 2;
      const thumbPositionPercentage =
        ((offset - thumbHalf) * 100) / this.$el[this.bar.offset];

      this.$parent.wrap[this.bar.scroll] =
        (thumbPositionPercentage * this.$parent.wrap[this.bar.scrollSize]) /
        100;
    },
    handleStartDrag(e) {
      e.stopImmediatePropagation();
      this.cursorDown = true;
      document.addEventListener("mousemove", this.handleMouseMoveDocument);
      document.addEventListener("mouseup", this.handleMouseUpDocument);
      document.onselectstart = () => false;
    },
    handleMouseMoveDocument(e) {
      if (!this.cursorDown) {
        return;
      }
      const prevPage = this[`page${this.bar.axis.toUpperCase()}`];
      if (prevPage == null) {
        return;
      }
      const offset =
        (this.$el.getBoundingClientRect()[this.bar.direction] -
          e[this.bar.client]) *
        -1;
      const thumbClickPosition = this.$refs.thumb[this.bar.offset] - prevPage;
      const thumbPositionPercentage =
        ((offset - thumbClickPosition) * 100) / this.$el[this.bar.offset];
      this.$parent.wrap[this.bar.scroll] =
        (thumbPositionPercentage * this.$parent.wrap[this.bar.scrollSize]) /
        100;
    },
    handleMouseUpDocument() {
      this.cursorDown = false;
      this[`page${this.bar.axis.toUpperCase()}`] = 0;
      document.removeEventListener("mousemove", this.handleMouseMoveDocument);
      document.onselectstart = null;
    },
  },
};
</script>

<template>
  <div
    class="w-scrollbar__bar"
    :class="[`is-${bar.key}`]"
    :style="trackStyle"
    @mousedown="handleClickTrack"
  >
    <div
      ref="thumb"
      class="w-scrollbar__thumb"
      :style="thumbStyle"
      @mousedown="handleStartDrag"
    ></div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/common.scss";
.w-scrollbar__bar {
  position: relative;
  right: 2px;
  bottom: 6px;
  z-index: 1;
  border-radius: 4px;
  opacity: 0;
  transition: opacity 120ms ease-out;
  .w-scrollbar__thumb {
    position: relative;
    display: block;
    width: 0;
    height: 0;
    cursor: pointer;
    border-radius: inherit;
    background-color: $scrollbar-color;
    transition: 0.3s background-color;
    &:hover {
      background-color: $scrollbar-color;
    }
  }
  &.is-vertical {
    position: absolute;
    width: 6px;
    top: 2px;
    bottom: 2px;
    > div {
      width: 6px;
      height: 100%;
    }
  }
  &.is-horizontal {
    width: calc(100% - 4px);
    height: 6px;
    left: 2px;
    right: 2px;
    bottom: 8px;
    > div {
      height: 100%;
    }
  }
}
</style>
