<template>
  <div class="home">
    <h1>SVG Icon 示例</h1>
    <div class="icon-demo">
      <w-svg-icon name="test" color="#333" :size="24" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
};
</script>

<style scoped>
.icon-demo {
  margin: 20px;
}
</style>
