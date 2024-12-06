# Card 卡片

将信息聚合在卡片容器中展示。

### 基础用法

基础的卡片用法。

:::demo 使用`title`属性来定义主标题，使用`subTitle`定义副标题，副标题也可以使用插槽`sub-title`定义。

```html
<template>
  <div class="card-demo">
    <w-card
      title="主标题"
      subTitle="副标题"
      shadow="nover"
    >
      <template #sub-title>时间：2024-12-05</template>
      <p style="text-align: justify; margin: 0">
        中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本
        中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中
      </p></w-card
    >
  </div>
</template>

<style>
.card-demo {
    background-color: #f3f3f3;
    padding: 20px
}
</style>
```

:::

### 简单卡片

卡片可以只有内容区域。

:::demo 使用`bottom`属性可以定义底部内边距，可以配合tabs标签切换组件使用。

```html
<template>
  <div class="card-demo">
    <w-card
    >
      <p style="text-align: justify; margin: 0">
        中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本
        中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中
      </p></w-card
    >
  </div>
</template>

<style>
.card-demo {
    background-color: #f3f3f3;
    padding: 20px
}
</style>
```

:::

### 卡片阴影

可对阴影的显示进行配置。

:::demo 使用`shadow`属性可以定义阴影的显示时机。

```html
<template>
  <div class="card-demo2">
    <w-card shadow="always">
        <p style="text-align: justify; margin: 0">
            总是显示阴影
        </p>
    </w-card>
    <w-card shadow="hover">
        <p style="text-align: justify; margin: 0">
            hover时显示阴影
        </p>
    </w-card>
    <w-card shadow="never">
        <p style="text-align: justify; margin: 0">
            从不显示阴影
        </p>
    </w-card>
  </div>
</template>

<style>
.card-demo2 {
    background-color: #f3f3f3;
    padding: 20px;
    .w-card {
        margin-bottom: 20px
    }
}
</style>
```

:::

### 属性

| 参数       | 说明                                    | 类型    | 可选值                  | 默认值 |
| ---------- | --------------------------------------- | ------- | ----------------------- | ------ |
| title       | 主标题                                    | string  | — | —      |
| subTitle       | 副标题                                    | string  | —  | — |
| size    | 卡片尺寸                          | string | small / large                       | small  |
| shadow | 卡片阴影                  | string | always / hover / never                       | always  |
| bottom   | 卡片内容区域的底部内边距                            | number / string | —                       | 40  |


### 插槽

| 名称       | 说明                                    | 
| ---------- | --------------------------------------- |
| —       | 卡片body内容                                    | 
| header       | 卡片主标题                                    | 
| sub-title       | 卡片副标题                                    | 