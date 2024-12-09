<script>
export default {
  name: "WDescriptionsRow",
  props: {
    row: {
      type: Array,
    },
  },
  inject: {
    wDescriptions: {
      default: () => ({}), // 提供一个空对象作为默认值
    },
  },
  mounted() {
    console.log(this.wDescriptions);
  },
  computed: {
    processedRow() {
      return this.row.map((item) => ({
        ...item,
        label: item.slots.label || item.props.label,
        ...[
          "labelClassName",
          "contentClassName",
          "labelStyle",
          "contentStyle",
        ].reduce((res, key) => {
          res[key] =
            item.props[key] !== undefined
              ? item.props[key]
              : this.wDescriptions[key];
          return res;
        }, {}),
      }));
    },
  },
};
</script>

<template>
  <tbody>
    <!-- 垂直方向 -->
    <template v-if="wDescriptions.direction === 'vertical'">
      <tr class="w-descriptions-row">
        <th
          class="w-descriptions-item__cell w-descriptions-item__label"
          v-for="(rowItem, index) in processedRow"
          :key="index"
        >
          <slot name="label" v-bind="rowItem.slots">{{ rowItem.label }}</slot>
        </th>
      </tr>
    </template>

    <!-- 边框 -->
    <template v-else-if="wDescriptions.border"></template>

    <!-- 默认 -->
    <template v-else>
      <tr class="w-descriptions-row">
        <td
          class="w-descriptions-item__cell"
          v-for="(rowItem, index) in processedRow"
          :key="index"
        >
          <div class="w-descriptions-item__container">
            <span class="w-descriptions-item__label">
              <slot name="label" v-bind="rowItem.slots">{{
                rowItem.label
              }}</slot>
            </span>
            <span class="w-descriptions-item__content">
              <slot v-bind="rowItem.slots">{{
                rowItem.slots.default[0].text
              }}</slot>
            </span>
          </div>
        </td>
      </tr>
    </template>
  </tbody>
</template>

<style lang="scss" scoped>
.container {
  box-sizing: border-box;
}
</style>
