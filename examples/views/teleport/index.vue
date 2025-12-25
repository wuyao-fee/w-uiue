<script>
export default {
  name: "WTeleportView",
};
</script>

<template>
  <div class="w">
    <h1>Teleport</h1>
    <p>组件内容的文本内容</p>
    <w-teleport to="body">
      <div class="teleport-test">挂载到body上的文本内容</div>
    </w-teleport>
  </div>
</template>

<style lang="scss" scoped></style>
