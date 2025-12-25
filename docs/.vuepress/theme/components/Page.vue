<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" ref="mainContent" />

    <PageRightToc ref="pageRightToc" />

    <PageEdit />

    <PageNav v-bind="{ sidebarItems }" />

    <slot name="bottom" />
  </main>
</template>

<script>
import PageEdit from '@theme/components/PageEdit.vue'
import PageNav from '@theme/components/PageNav.vue'
import PageRightToc from '@theme/components/PageRightToc.vue'

export default {
  components: { PageEdit, PageNav, PageRightToc },
  props: ['sidebarItems'],
  mounted() {
    this.throttleSetMainContentWidth = this.throttle(this.setMainContentWidth, 200);

    // 使用ResizeObserver监听右侧目录宽度变化
    this.resizeObserver = new ResizeObserver(entries => {
      for (let entry of entries) {
        this.setMainContentWidth(`${entry.contentRect.width}px`);
      }
    })

    window.addEventListener('resize', this.throttleGetRightTocWidth);
    this.$nextTick(() => {
      this.setMainContentWidth(this.getRightTocWidth());
      const tocElement = this.$refs.pageRightToc?.$el;
      if (tocElement) {
        this.resizeObserver.observe(tocElement);
        this.setMainContentWidth(this.getRightTocWidth());
      }
    });
  },
  beforeDestroy() {
    if (this.resizeObserver) {
      const tocElement = this.$refs.pageRightToc?.$el;
      if (tocElement) {
        this.resizeObserver.unobserve(tocElement);
      }
      this.resizeObserver.disconnect();
    }
    window.removeEventListener('resize', this.throttleSetMainContentWidth);
  },
  methods: {
    getRightTocWidth() {
      return this.$refs.pageRightToc.$el.offsetWidth + 'px'
    },
    // 设置内容区宽度
    setMainContentWidth(width) {
      this.$refs.mainContent.$el.style.marginRight = width;
    },
    throttle(fn, wait) {
        let lastCall = 0;
        return function(...args) {
            const now = new Date().getTime();
            if (now - lastCall >= wait) {
                lastCall = now;
                fn.apply(this, args);
            }
        }
    },    
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
