<script>
export default {
  name: "WPopperView",
};
</script>

<template>
  <div class="w">
    <!-- <w-popper>弹出框默认弹出内容</w-popper> -->
    <w-popper
      trigger="clickToToggle"
      placement="bottom"
      content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabottom"
    >
      <w-button slot="reference">参考元素</w-button>
    </w-popper>
    <br />
    <w-popper
      trigger="clickToToggle"
      placement="top"
      content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaatop"
    >
      <w-button slot="reference">参考元素</w-button>
    </w-popper>
    <w-popper
      trigger="clickToToggle"
      placement="left"
      content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaleft"
    >
      <w-button slot="reference">参考元素</w-button>
    </w-popper>
    <w-popper
      trigger="clickToToggle"
      placement="right"
      content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaright"
    >
      <w-button slot="reference">参考元素</w-button>
    </w-popper>
  </div>
</template>

<style lang="scss" scoped>
.w {
  width: 100%;
  height: 100vh;
  padding-left: 200px;
}
</style>
