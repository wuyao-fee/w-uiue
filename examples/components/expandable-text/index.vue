<!-- 
    使用示例：
    1. 支持默认插槽，也支持text属性渲染，text优先级高于默认插槽
    2. 默认展示3行，超过3行显示展开按钮
    3. 使用attr注意点：添加属性和获取属性必须是同一个节点
    <expandable-text :text="text" maxLines="5" />

    <expandable-text
        :text="text"
        maxLines="5"
    >渲染的文本内容</expandable-text>
-->
<template>
  <div class="expandable-text-wrapper">
    <input :id="uniqueId" class="exp" type="checkbox" />
    <div class="text" :line-clamp="maxLines">
      <label
        class="btn"
        :for="uniqueId"
        :data-expand="expandText"
        :data-collapse="collapseText"
      ></label>
      <span v-html="filterContent" v-if="text"></span>
      <span v-else><slot></slot></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "ExpandableText",
  props: {
    text: {
      type: String,
      default: "",
    },
    // 最大行数，最大支持10行
    maxLines: {
      type: [Number, String],
      default: 3,
    },
    // 展开
    expandText: {
      type: String,
      default: "展开",
    },
    // 收起
    collapseText: {
      type: String,
      default: "收起",
    },
  },
  data() {
    return {
      uniqueId: `exp-${Math.random().toString(36).substr(2, 9)}`, // 确保ID唯一
    };
  },
  computed: {
    filterContent() {
      if (this?.text) {
        return this?.text?.replace(/\n/g, "<br/>");
      }
      return this.getSlotContent()?.replace(/\n/g, "<br/>");
    },
  },
  methods: {
    // 获取插槽内容
    getSlotContent() {
      if (this.$slots.default) {
        const slotsElements = this.$slots.default;
        const texts = [];
        slotsElements.forEach((ele) => {
          if (ele.children && typeof ele.children === "string") {
            texts.push(ele.children);
          } else if (ele.text) {
            texts.push(ele.text);
          }
        });
        return texts.join("");
      }
      return "";
    },
  },
};
</script>

<style lang="scss">
$line-height: 1.5em;

.text {
  font-size: 20px;
  overflow: hidden;
  text-overflow: ellipsis;
  text-align: justify;
  /* display: flex; */
  /*   display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical; */
  position: relative;
  line-height: 1.5;
  max-height: 4.5em;
  transition: 0.3s max-height;
}
.text::before {
  content: "";
  height: calc(100% - 26px);
  float: right;
}
.text::after {
  content: "";
  width: 999vw;
  height: 999vw;
  position: absolute;
  box-shadow: inset calc(100px - 999vw) calc(30px - 999vw) 0 0 #fff;
  margin-left: -100px;
}
.btn {
  position: relative;
  float: right;
  clear: both;
  margin-left: 20px;
  font-size: 16px;
  padding: 0 8px;
  background: #3f51b5;
  line-height: 24px;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  /* margin-top: -30px; */
}
.btn::after {
  //   content: "展开";
  content: attr(data-expand);
}
.exp {
  display: none;
}
.exp:checked + .text {
  max-height: none;
}
.exp:checked + .text::after {
  visibility: hidden;
}
.exp:checked + .text .btn::before {
  visibility: hidden;
}
.exp:checked + .text .btn::after {
  //   content: "收起";
  content: attr(data-collapse);
}
.btn::before {
  content: "...";
  position: absolute;
  left: -5px;
  color: #333;
  transform: translateX(-100%);
}

@for $i from 1 through 10 {
  [line-clamp="#{$i}"] {
    max-height: #{$i * $line-height};
  }
}
</style>
