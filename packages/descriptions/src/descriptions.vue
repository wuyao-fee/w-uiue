<script>
import WDescriptionsRow from "./descriptions-row.vue";
import { isFunction } from "../../theme-chalk/src/utils/types.js";
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
      type: Number,
      default: 3,
    },
  },
  computed: {
    rows() {
      return this.getRows();
    },
  },
  provide() {
    return {
      wDescriptions: this,
    };
  },
  methods: {
    getRows() {
      // 获取所有的子组件，确保都是WDescriptionsItem
      console.log(this.$slots.default, "default");
      const children = (this.$slots.default || []).filter(
        (vnode) =>
          vnode.tag &&
          vnode.componentOptions &&
          vnode.componentOptions.Ctor.options.name === "WDescriptionsItem"
      );
      console.log(children, "children");

      // 预处理每个子组件的props和slots
      const nodes = children.map((vnode) => ({
        props: this.getOptionProps(vnode),
        slots: this.getSlots(vnode),
        vnode,
      }));
      console.log(nodes, "nodes");

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
      console.log(rows, "rows");
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
      console.log(vnode);
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
  <div class="w-descriptions">
    <div class="w-descriptions__header">
      <div class="w-descriptions__title">
        <slot name="title"></slot>
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
.w-descriptions {
  .w-descriptions__table {
    width: 100%;
    border-collapse: collapse;
  }
}
</style>
