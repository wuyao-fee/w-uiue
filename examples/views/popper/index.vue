<script>
export default {
  name: "WPopperView",
};
</script>

<template>
  <div class="w">
    <w-popper>弹出框默认弹出内容</w-popper>
    <w-popper trigger="clickToToggle" placement="top-end"
      >弹出框弹出方向</w-popper
    >
  </div>
</template>

<style lang="scss" scoped></style>
