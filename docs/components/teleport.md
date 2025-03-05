# Teleport 传送门

`w-teleport`组件可以将一个组件内部的一部分模板“传送”到该组件的 DOM 结构外层的位置去。

### 基础用法

:::demo 使用`to`属性来指定挂在到哪里去，常见为`body`。

```html
<template>
  <div class="teleport-demo">
    <p>这是组件本身的文本内容，这是组件本身的文本内容，这是组件本身的文本内容，这是组件本身的文本内容，这是组件本身的文本内容，这是组件本身的文本内容，这是组件本身的文本内容</p>
    <w-teleport to="body">
        <p>这是被teleport传送挂载到body上的内容</p>
    </w-teleport>
  </div>
</template>
```

:::


### 属性

| 参数       | 说明                                    | 类型    | 是否必须  | 可选值                  | 默认值 |
| ---------- | --------------------------------------- | ------- | ------------ |----------------------- | ------ |
| to         | 挂载目标                       | string / DOM元素引用 | 是 |  —                       | —  |
| disabled   | 是否禁用状态                            | boolean | 否 | —                       | false  |
| where   | 传送位置前后                            | string | 否 | before / after                       | after  |
