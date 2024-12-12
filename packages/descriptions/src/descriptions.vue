<script>
import WDescriptionsRow from "./descriptions-row.vue";
import { isFunction } from "../../theme-chalk/src/utils/types.js";
import { debounce } from "../../theme-chalk/src/utils/tool.js";
export default {
  name: "WDescriptions",
  components: {
    WDescriptionsRow,
  },
  props: {
    title: {
      type: String,
      default: "",
    },
    extra: {
      type: String,
      default: "",
    },
    column: {
      type: [Number, String],
      default: 3,
    },
    labelWidth: {
      type: String,
      default: "auto",
    },
    labelAlign: {
      type: String,
      default: "left",
    },
    // 是否显示冒号
    colon: {
      type: Boolean,
      default: true,
    },
    // 超出省略
    ellipsis: {
      type: Boolean,
      default: false,
    },
    // 实现显示边框
    border: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      wDescriptionsWidth: 0,
    };
  },
  computed: {
    rows() {
      return this.getRows();
    },
  },
  mounted() {
    this.updateWDescriptionsWidth(); // 初始化宽度
    this.updateWDescriptionsWidthDebounce = debounce(
      this.updateWDescriptionsWidth,
      200
    );
    window.addEventListener("resize", this.updateWDescriptionsWidthDebounce); // 监听窗口大小变化
  },
  beforeDestroy() {
    window.removeEventListener("resize", this.updateWDescriptionsWidthDebounce); // 清除事件监听器
  },
  provide() {
    return {
      wDescriptions: this,
    };
  },
  methods: {
    // 更新容器宽度
    updateWDescriptionsWidth() {
      this.$nextTick(() => {
        const descriptionsContainer = this.$refs["w-descriptions"];
        if (descriptionsContainer) {
          this.wDescriptionsWidth = descriptionsContainer.offsetWidth;
        }
      });
    },
    getRows() {
      // 获取所有的子组件，确保都是WDescriptionsItem
      const children = (this.$slots.default || []).filter(
        (vnode) =>
          vnode.tag &&
          vnode.componentOptions &&
          vnode.componentOptions.Ctor.options.name === "WDescriptionsItem"
      );

      // 预处理每个子组件的props和slots
      const nodes = children.map((vnode) => ({
        props: this.getOptionProps(vnode),
        slots: this.getSlots(vnode),
        vnode,
      }));

      // 初始化变量
      const rows = [];
      let temp = [];
      let count = this.column;

      // 遍历处理每个节点
      nodes.forEach((node, index) => {
        const span = node.props?.span || 1;

        if (index === children.length - 1) {
          temp.push(this.filledNode(node, span, count, true));
          rows.push(temp);
          return;
        }

        if (span < count) {
          count -= span;
          temp.push(node);
        } else {
          temp.push(this.filledNode(node, span, count));
          rows.push(temp);
          count = this.column;
          temp = [];
        }
      });
      return rows;
    },
    getOptionProps(vnode) {
      if (!vnode.componentOptions) return {};

      const componentOptions = vnode.componentOptions;
      const { propsData = {}, Ctor = {} } = componentOptions;
      const props = (Ctor.options || {}).props || {};
      const res = {};

      for (const key in props) {
        const prop = props[key];
        const defaultValue = prop.default;

        if (defaultValue !== undefined) {
          res[key] = isFunction(defaultValue)
            ? defaultValue.call(vnode)
            : defaultValue;
        }
      }
      return { ...res, ...propsData };
    },
    getSlots(vnode) {
      let componentOptions = vnode.componentOptions || {};
      const children = vnode.children || componentOptions.children || [];
      const slots = {};

      children.forEach((child) => {
        if (!this.isEmptyElement(child)) {
          const name = (child.data && child.data.slot) || "default";
          slots[name] = slots[name] || [];
          if (child.tag === "template") {
            slots[name].push(child.children);
          } else {
            slots[name].push(child);
          }
        }
      });

      return { ...slots };
    },
    // 填充节点
    filledNode(node, span, count, isLast = false) {
      if (!node.props) {
        node.props = {};
      }
      if (span > count) {
        node.props.span = count;
      }
      if (isLast) {
        node.props.span = count;
      }
      return node;
    },
    isEmptyElement(c) {
      return !(c.tag || (c.text && c.text.trim() !== ""));
    },
  },
};
</script>

<template>
  <div class="w-descriptions" ref="w-descriptions">
    <div class="w-descriptions__header">
      <div class="w-descriptions__title">
        <slot name="title" v-if="$slots.title"></slot>
        <span v-else>{{ title }}</span>
      </div>
      <div class="w-descriptions__extra">
        <slot name="extra"></slot>
      </div>
    </div>
    <div class="w-descriptions__body">
      <table class="w-descriptions__table">
        <w-descriptions-row
          v-for="(row, index) in rows"
          :key="index"
          :row="row"
        ></w-descriptions-row>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk//src//common/variables.scss";
.w-descriptions {
  .w-descriptions__title {
    font-family: $font-family;
    font-size: $font-size--large;
    line-height: $line-height--large;
    color: $first-text-color;
    font-weight: $font-weight--bold;
    margin-bottom: 24px;
  }
  .w-descriptions__table {
    table-layout: fixed;
    width: 100%;
    border-collapse: collapse;
  }
}
</style>
