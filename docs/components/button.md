# Button 按钮

### 基础用法

基础的按钮用法。

:::demo 使用`type`属性来定义 Button 的样式。

```html
<template>
  <div class="button-demo">
    <w-button>默认按钮-中</w-button>
    <w-button type="primary">主要按钮-中</w-button>
    <w-button type="dashed">虚线按钮-中</w-button>
    <w-button type="text">文本按钮-中</w-button>
  </div>
</template>

<style>
  .button-demo {
    display: flex;
    margin-bottom: 5px;
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
</template>

<style>
  .button-demo {
    display: flex;
    margin-bottom: 5px;
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
    <w-button type="primary" icon="line-plus">新增-中</w-button>
    <w-button type="primary" icon="line-delete">删除-中</w-button>
    <w-button type="primary" icon="line-edit">编辑-中</w-button>
    <w-button type="primary" icon="line-search">搜索-中</w-button>
  </div>
</template>

<style>
  .button-demo {
    display: flex;
    margin-bottom: 5px;
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
    margin-bottom: 5px;
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
    margin-bottom: 5px;
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
    margin-bottom: 5px;
  }
</style>
```

:::

### 属性

| 参数       | 说明                   | 类型    | 可选值                         | 默认值  |
| ---------- | ---------------------- | ------- | ------------------------------ | ------- |
| type       | 类型                   | string  | primary / dashed / text |  —       |
| size       | 尺寸                   | string  | small / medium / large           | medium  |
| loading    | 是否加载中状态         | boolean | —                              | false   |
| hasLoading | 是否自行维护加载中状态 | boolean | —                              | false   |
| disabled   | 是否禁用状态           | boolean | —                              | false   |
| icon       | 图标类型               | string  | —                              |         |
