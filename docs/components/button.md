# Button 按钮

### 基础用法

基础的按钮用法。

:::demo 使用`type`属性来定义 Button 的样式。

```html
<template>
  <div class="button-demo">
    <w-button>默认按钮</w-button>
    <w-button type="primary">主要按钮</w-button>
    <w-button type="dashed">虚线按钮</w-button>
    <w-button type="text">文本按钮</w-button>
  </div>
  <div class="button-demo">
    <w-button type="success">成功按钮</w-button>
    <w-button type="warning">警告按钮</w-button>
    <w-button type="danger">危险按钮</w-button>
    <w-button type="help">帮助按钮</w-button>
  </div>
  <div class="button-demo">
    <w-button plain>朴素按钮</w-button>
    <w-button plain type="primary">主要按钮</w-button>
    <w-button plain type="success">成功按钮</w-button>
    <w-button plain type="warning">警告按钮</w-button>
    <w-button plain type="danger">危险按钮</w-button>
    <w-button plain type="help">帮助按钮</w-button>
  </div>
  <div class="button-demo">
    <w-button round>胶囊按钮</w-button>
    <w-button round type="primary">主要按钮</w-button>
    <w-button round type="success">成功按钮</w-button>
    <w-button round type="warning">警告按钮</w-button>
    <w-button round type="danger">危险按钮</w-button>
    <w-button round type="help">帮助按钮</w-button>
  </div>
  <div class="button-demo">
    <w-button circle icon="magnifying-glass">圆形按钮</w-button>
    <w-button circle type="primary" icon="plus">主要按钮</w-button>
    <w-button circle type="success" icon="check">成功按钮</w-button>
    <w-button circle type="warning" icon="star">警告按钮</w-button>
    <w-button circle type="danger" icon="trash-can">危险按钮</w-button>
    <w-button circle type="help" icon="pen-to-square">帮助按钮</w-button>
  </div>
</template>

<style>
.button-demo {
  display: flex;
  margin-bottom: 10px;
}
</style>
```

:::

### 禁用状态

按钮不可用状态。

:::demo 你可以使用 disabled 属性来定义按钮是否可用，它接受一个 Boolean 值。

```html
<template>
  <div class="button-demo">
    <w-button disabled>默认按钮-中</w-button>
    <w-button type="primary" disabled>主要按钮-中</w-button>
    <w-button type="dashed" disabled>虚线按钮-中</w-button>
    <w-button type="text" disabled>文本按钮-中</w-button>
  </div>
  <div class="button-demo">
    <w-button disabled type="success">成功按钮</w-button>
    <w-button disabled type="warning">警告按钮</w-button>
    <w-button disabled type="danger">危险按钮</w-button>
    <w-button disabled type="help">帮助按钮</w-button>
  </div>
  <div class="button-demo">
    <w-button disabled plain>朴素按钮</w-button>
    <w-button disabled plain type="primary">主要按钮</w-button>
    <w-button disabled plain type="success">成功按钮</w-button>
    <w-button disabled plain type="warning">警告按钮</w-button>
    <w-button disabled plain type="danger">危险按钮</w-button>
    <w-button disabled plain type="help">帮助按钮</w-button>
  </div>
  <div class="button-demo">
    <w-button disabled round>胶囊按钮</w-button>
    <w-button disabled round type="primary">主要按钮</w-button>
    <w-button disabled round type="success">成功按钮</w-button>
    <w-button disabled round type="warning">警告按钮</w-button>
    <w-button disabled round type="danger">危险按钮</w-button>
    <w-button disabled round type="help">帮助按钮</w-button>
  </div>
  <div class="button-demo">
    <w-button disabled circle icon="magnifying-glass">圆形按钮</w-button>
    <w-button disabled circle type="primary" icon="plus">主要按钮</w-button>
    <w-button disabled circle type="success" icon="check">成功按钮</w-button>
    <w-button disabled circle type="warning" icon="star">警告按钮</w-button>
    <w-button disabled circle type="danger" icon="trash-can">危险按钮</w-button>
    <w-button disabled circle type="help" icon="pen-to-square">帮助按钮</w-button>
  </div>
</template>

<style>
.button-demo {
  display: flex;
}
</style>
```

:::

### 图标按钮

带图标的按钮可增强辨识度。

:::demo 设置 icon 属性即可。

```html
<template>
  <div class="button-demo">
    <w-button type="primary" icon="plus">新增-中</w-button>
    <w-button type="primary" icon="trash-can">删除-中</w-button>
    <w-button type="primary" icon="pen-to-square">编辑-中</w-button>
    <w-button type="primary" icon="magnifying-glass">搜索-中</w-button>
  </div>
</template>

<style>
.button-demo {
  display: flex;
}
</style>
```

:::

### 加载中

点击按钮后进行数据加载操作，在按钮上显示加载状态。

:::demo 要设置为 loading 状态，只要设置 loading 属性为 true 即可。

```html
<template>
  <div class="button-demo">
    <w-button type="primary" :loading="loading">加载中</w-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true,
      };
    },
  };
</script>

<style>
.button-demo {
  display: flex;
}
</style>
```

:::

### 自行维护加载中状态

Button 组件内部自行维护 loading 状态。

:::demo 添加`hasLoading`属性，处理`click`事件时需要返回一个`promise`。

```html
<template>
  <div class="button-demo">
    <w-button type="primary" hasLoading @click="handleClick">自行维护</w-button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        loading: true,
      };
    },
    methods: {
      async handleClick() {
        return new Promise((resolve) => {
          setTimeout(() => {
            // 模拟异步操作
            resolve();
          }, 2000);
        });
      },
    },
  };
</script>

<style>
.button-demo {
  display: flex;
}
</style>
```

:::

### 属性

| 参数       | 说明                                    | 类型    | 是否必须  | 可选值                  | 默认值 |
| ---------- | --------------------------------------- | ------- | ------------ |----------------------- | ------ |
| type       | 类型                                    | string  | 否 | primary / dashed / text <br> success / warning / danger / help | —      |
| size       | 尺寸                                    | string  | 否 |small / medium / large  | medium |
| plain    | 是否朴素按钮                          | boolean | 否 | —                       | false  |
| round    | 是否胶囊按钮                          | boolean | 否 | —                       | false  |
| circle    | 是否圆形按钮                          | boolean | 否 | —                       | false  |
| hasLoading | 是否自行维护加载中状态                  | boolean | 否 |  —                       | false  |
| disabled   | 是否禁用状态                            | boolean | 否 | —                       | false  |
| icon       | 图标类型                                | string  | 否 | —                       |        |
