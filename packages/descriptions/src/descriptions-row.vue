<script>
export default {
  name: "WDescriptionsRow",
  props: {
    row: {
      type: Array,
    },
  },
};
</script>

<template>
  <tbody>
    <tr class="w-descriptions-row">
      <th
        class="w-descriptions-item__cell w-descriptions-item__label"
        v-if="(rowItem, index) in row"
        :key="index"
      >
        {{ rowItem.label }}
      </th>
    </tr>
  </tbody>
</template>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
}
</style>
