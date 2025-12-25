# Popper

### 基础用法

popper基础的用法，基于`vue-popper`实现。

:::demo 使用`trigger`属性来定义 Popper 的触发类型。

```html
<template>
  <div class="popper-demo">
    <w-popper
      trigger="hover"
      placement="top"
      :content="content"
    >
      <w-button slot="reference">hover触发</w-button>
    </w-popper>
    <w-popper
      trigger="click"
      placement="top"
      :content="content"
    >
      <w-button slot="reference">click触发</w-button>
    </w-popper>
    <w-popper
      trigger="focus"
      placement="top"
      :content="content"
    >
      <w-button slot="reference">focus触发</w-button>
    </w-popper>
    <w-popper
      trigger="clickToToggle"
      placement="top"
      :content="content"
    >
      <w-button slot="reference">clickToToggle触发</w-button>
    </w-popper>
  </div>
</template>

<script>
export default {
  data() {
    return {
        content: '这是一段内容,这是一段内容,这是一段内容,这是一段内容。',
    };
  }
};
</script>

<style>
.popper-demo {
  display: flex;
}
.w-popper {
  margin-right: 20px;
}
</style>
```

:::


### 嵌套信息

popper基础的用法，基于`vue-popper`实现。

:::demo 使用`trigger`属性来定义 Popper 的触发类型。

```html
<template>
  <div class="popper-demo">
    <w-popper trigger="clickToToggle" placement="top" width="800px">
      <w-descriptions
        title="用户信息"
        labelWidth="56px"
        labelAlign="right"
        ellipsis
      >
        <w-descriptions-item label="用户名">kooriookami</w-descriptions-item>
        <w-descriptions-item label="手机号">18100000000</w-descriptions-item>
        <w-descriptions-item label="居住地">苏州市</w-descriptions-item>
        <w-descriptions-item label="备注">学校</w-descriptions-item>
        <w-descriptions-item label="联系地址"
          >江苏省苏州市吴中区</w-descriptions-item
        >
      </w-descriptions>
      <w-button slot="reference">clickToToggle触发</w-button>
    </w-popper>
  </div>
</template>

<style>
.popper-demo {
  display: flex;
}
.w-popper {
  margin-right: 20px;
}
.popper-demo th,
.popper-demo td {
  border: none !important;
}
</style>
```

:::


### 属性

| 参数       | 说明                                    | 类型    | 是否必须  | 可选值                  | 默认值 |
| ---------- | --------------------------------------- | ------- | ------------ |----------------------- | ------ |
| trigger       | 触发方式                             | string  | 否 | clickToOpen/hover/clickToToggle/click/focus | clickToOpen     |
| placement       | 弹出方向                           | string  | 否 |top / right / bottom / left  | top |
| content    | 弹出内容                          | string | 否 | —                       |  —   |
| width   | 弹框宽度                            | string | 否 | —                       | auto  |
| disabled   | 是否禁用状态                            | boolean | 否 | —                       | false  |
| visibleArrow  | 是否展示箭头                                | boolean  | 否 | —                       |  true      |
| popperClass  | 自定义类名                                | string  | 否 | —                       |  —      |


### 插槽

| 名称       | 说明                                    | 
| ---------- | --------------------------------------- |
| —       | 默认展示内容                                    | 
| reference       | 触发popper的HTML元素                                    | 


### 事件

| 名称       | 说明                                    |  回调参数 |
| ---------- | --------------------------------------- | ------------|
| created       | 创建了popper组件                 | (context:object) |
| show       | 显示弹出框    |       |
| hide       | 隐藏弹出框    |          |
| document-click       |    |            |      |
