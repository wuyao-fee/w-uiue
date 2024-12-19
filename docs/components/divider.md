# Divider 分割线

### 基础用法

区隔内容的分割线。

:::demo 使用`type`属性来定义 Divider 的样式。

```html
<template>
  <div class="divider-demo">
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
      <w-divider></w-divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
      <w-divider type="dashed"></w-divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
      <w-divider type="dotted"></w-divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
    </div>
  </div>
</template>

<style>
.divider-demo p {
    text-align: justify;
}
</style>
```
:::

### 垂直分割线

默认是水平分割线。

:::demo 使用`direction`属性来定义分割线的水平垂直方向。

```html
<template>
  <div class="divider-demo">
    <div class="vertical">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
      <w-divider direction="vertical"></w-divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
    </div>
  </div>
</template>

<style>
.divider-demo .vertical {
    display: flex;
}
.divider-demo .vertical p {
    text-align: justify;
    width: 50%;
}
</style>
```
:::

### 带标题的分割线

:::demo 直接添加分割线标题文本即可，渲染在默认插槽中。

```html
<template>
  <div class="divider-demo">
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
      <w-divider>水平分割线标题</w-divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
    </div>
    <div class="vertical">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
      <w-divider direction="vertical">垂直分割线标题</w-divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
    </div>
  </div>
</template>

<style>
.divider-demo .vertical {
    display: flex;
}
.divider-demo .vertical p {
    text-align: justify;
    width: 50%;
}
</style>
```
:::

### 设置分割线标题位置

默认居中，可以设置为偏左或偏右。

:::demo 使用`orientation`属性来定义分割线标题的对齐方式。

```html
<template>
  <div class="divider-demo">
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
      <w-divider orientation="left">水平分割线标题偏左</w-divider>
      <w-divider>水平分割线标题居中</w-divider>
      <w-divider orientation="right">水平分割线标题偏右</w-divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
    </div>
    <div class="vertical">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
      <w-divider direction="vertical" orientation="left">垂直分割线标题偏上</w-divider>
      <w-divider direction="vertical">垂直分割线标题居中</w-divider>
      <w-divider direction="vertical" orientation="right">垂直分割线标题偏下</w-divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
    </div>
  </div>
</template>

<style>
.divider-demo .vertical {
    display: flex;
}
.divider-demo .vertical p {
    text-align: justify;
    width: 50%;
}
</style>
```
:::

### 属性

| 参数        | 说明           | 类型            | 是否必须 | 可选值                  | 默认值     |
| ----------- | -------------- | --------------- | ---- | ----------------------- | ---------- |
| type        | 类型           | string          | 否 | solid / dashed / dotted | solid      |
| direction   | 水平或垂直方向 | string          | 否 | horizontal / vertical   | horizontal |
| orientation | 标题对齐方式   | string          | 否 | left / center / right   | center     |
| margin      | 分割线两侧边距 | string / number | 否 | —                       | 16         |

