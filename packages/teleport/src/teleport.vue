<script>
export default {
  name: "WTeleport",
  props: {
    /**
     * 目标元素，可以是字符串或DOM元素
     */
    to: {
      // type: [String, HTMLElement],
      type: String,
      required: true,
    },
    /**
     * 传送位置，可选值：before、after
     */
    where: {
      type: String,
      default: "after",
    },
    /**
     * 是否禁用传送功能
     */
    disabled: Boolean,
  },
  data() {
    return {
      nodes: [],
      waiting: false,
      observer: null,
      parent: null,
    };
  },
  watch: {
    to: "maybeMove",
    where: "maybeMove",
    disabled(value) {
      if (value) {
        this.disable();
        this.teardownObserver();
      } else {
        this.bootObserver();
        this.move();
      }
    },
  },
  mounted() {
    this.nodes = Array.from(this.$el.childNodes);
    if (!this.disabled) {
      this.bootObserver();
    }
    this.maybeMove();
  },
  beforeDestroy() {
    this.disable();
    this.teardownObserver();
  },
  computed: {
    className() {
      if (this.disabled) {
        return ["teleportClass"];
      }
      return ["teleportClass", "hidden"];
    },
  },
  methods: {
    maybeMove() {
      if (!this.disabled) {
        this.move();
      }
    },
    move() {
      this.waiting = false;

      // to允许传递一个具体的DOM元素引用，供高级操作使用
      if (typeof this.to === "string") {
        this.parent = document.querySelector(this.to);
      } else if (this.to) {
        // 如果他不是字符串，就认为他是个DOM元素引用，直接赋值
        this.parent = this.to;
      } else {
        // 无法被识别的目标，不做处理
      }

      if (!this.parent) {
        this.disable();
        this.waiting = true;
        return;
      }

      if (this.where === "before") {
        this.parent.prepend(this.getFragment());
      } else {
        this.parent.appendChild(this.getFragment());
      }
    },
    disable() {
      this.$el.appendChild(this.getFragment());
      this.parent = null;
    },
    // Using a fragment is faster because it'll trigger only a single reflow
    // See https://developer.mozilla.org/en-US/docs/Web/API/DocumentFragment
    getFragment() {
      const fragment = document.createDocumentFragment();
      this.nodes.forEach((node) => fragment.appendChild(node));
      return fragment;
    },
    onMutations(mutations) {
      // Makes sure the move operation is only done once
      let shouldMove = false;

      for (let i = 0; i < mutations.length; i++) {
        const mutation = mutations[i];
        const filteredAddedNodes = Array.from(mutation.addedNodes).filter(
          (node) => !this.nodes.includes(node)
        );

        if (Array.from(mutation.removedNodes).includes(this.parent)) {
          this.disable();
          this.waiting = !this.disabled;
        } else if (this.waiting && filteredAddedNodes.length > 0) {
          shouldMove = true;
        } else {
          // 都不满足的情况下，不做任何事
        }
      }

      if (shouldMove) {
        this.move();
      }
    },
    bootObserver() {
      if (this.observer) {
        return;
      }

      this.observer = new MutationObserver((mutations) =>
        this.onMutations(mutations)
      );

      this.observer.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: false,
        characterData: false,
      });
    },
    teardownObserver() {
      if (this.observer) {
        this.observer.disconnect();
        this.observer = null;
      }
    },
  },
};
</script>

<template>
  <div class="w-teleport" :class="className">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/common.scss";
.hidden {
  display: none;
  visibility: hidden;
}
</style>
