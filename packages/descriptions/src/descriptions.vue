<script>
import WDescriptionsRow from "./descriptions-row.vue";
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
  methods: {
    getRows() {
      // 获取所有的子组件，确保都是WDescriptionsItem
      const children = (this.$slots.default || []).filter(
        (vnode) =>
          vnode.tag &&
          vnode.componentOptions &&
          vnode.componentOptions.Ctor.options.name === "ElDescriptionsItem"
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
        const span = node.props.span || 1;

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
      console.log(vnode);
    },
    getSlots(vnode) {
      console.log(vnode);
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
.container {
  box-sizing: border-box;
}
</style>
