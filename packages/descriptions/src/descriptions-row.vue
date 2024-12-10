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
    console.log(this.wDescriptions, "this.wDescriptions");
  },
  computed: {
    processedRow() {
      console.log(
        this.row.map((item) => ({
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
            res["labelStyle"] = {
              // 父级设置的labelWidth
              width: this.wDescriptions.labelWidth,
              "text-align": this.wDescriptions.labelAlign,
            };
            return res;
          }, {}),
        })),
        "processedRow"
      );
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
          res["labelStyle"] = {
            // 父级设置的labelWidth
            width: this.wDescriptions.labelWidth,
            "text-align": this.wDescriptions.labelAlign,
          };
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
          :colspan="rowItem.props.span"
          :style="{ flex: rowItem.props.span }"
        >
          <div class="w-descriptions-item__container">
            <span
              class="w-descriptions-item__label"
              :class="[wDescriptions.colon ? 'has-colon' : '']"
              :style="rowItem.labelStyle"
            >
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
@import "../../../packages/theme-chalk//src//common/variables.scss";
.w-descriptions-row {
  line-height: 22px;
  font-family: $font-family;
  font-size: $font-size;
  font-weight: $font-weight;
  display: flex;
  margin-bottom: 16px;
  .w-descriptions-item__label {
    color: $second-text-color;
    margin-right: 26px;
    position: relative;
    &.has-colon::after {
      position: absolute;
      content: ":";
      top: 0;
    }
  }
  .w-descriptions-item__content {
    color: $first-text-color;
  }
  .w-descriptions-item__container {
    display: flex;
  }
}
</style>
