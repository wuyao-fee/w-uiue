<template>
  <main class="page">
    <slot name="top" />

    <Content class="theme-default-content" />

    <PageRightToc />

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
    console.log(this.sidebarItems, this.$page)
  }
}
</script>

<style lang="stylus">
@require '../styles/wrapper.styl'

.page
  padding-bottom 2rem
  display block

</style>
