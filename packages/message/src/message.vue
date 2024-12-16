<script>
import WIcon from "../../icon/src/icon.vue";
export default {
  name: "WMessage",
  components: { WIcon },
  data() {
    return {
      visible: true,
    };
  },
};
</script>

<template>
  <div class="w-message" v-show="visible">
    <w-icon name="circle-check" color="#00B42A"></w-icon>
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/variables.scss";
</style>
