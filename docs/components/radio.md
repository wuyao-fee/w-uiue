# Radio 单选框

在一组备选项中进行单选

### 基础用法

由于选项默认可见，不宜过多，若选项过多，建议使用 Select 选择器。

:::demo 要使用 Radio 组件，只需要设置v-model绑定变量，选中意味着变量的值为相应 Radio label属性的值，label可以是String、Number或Boolean。

```html
<template>
  <div class="radio-demo">
    <w-radio v-model="radio" label="1">备选项</w-radio>
    <w-radio v-model="radio" label="2">备选项</w-radio>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: '1'
      };
    }
  }
</script>

<style>
.radio-demo {
  display: flex;
  margin-bottom: 10px;
}
</style>
```
:::

### 禁用状态

单选框不可用的状态。

:::demo 只要在w-radio元素中设置disabled属性即可，它接受一个Boolean，true为禁用。

```html
<template>
  <div class="radio-demo">
    <w-radio disabled v-model="radio" label="禁用">备选项</w-radio>
    <w-radio disabled v-model="radio" label="选中且禁用">备选项</w-radio>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: '选中且禁用'
      };
    }
  }
</script>

<style>
.radio-demo {
  display: flex;
  margin-bottom: 10px;
}
</style>
```
:::

### 单选框组

适用于在多个互斥的选项中选择的场景

:::demo 结合w-radio-group元素和子元素el-radio可以实现单选组，在w-radio-group中绑定v-model，在w-radio中设置好label即可，无需再给每一个w-radio绑定变量，另外，还提供了change事件来响应变化，它会传入一个参数value。

```html
<template>
  <div class="radio-demo">
    <w-radio-group v-model="radio">
        <w-radio :label="3">备选项</w-radio>
        <w-radio :label="6">备选项</w-radio>
        <w-radio :label="9">备选项</w-radio>
    </w-radio-group>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        radio: 3
      };
    }
  }
</script>

<style>
.radio-demo {
  display: flex;
  margin-bottom: 10px;
}
</style>
```
:::