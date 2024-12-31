# Input 输入框

### 基础用法

通过鼠标或键盘输入内容，是最基础的表单域的包装。

:::demo 通过 `v-model` 实现数据的双向绑定。

```html
<template>
  <div class="input-demo">
    <w-input v-model="input" placeholder="请输入内容"></w-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>

<style>
.input-demo {
  width: 220px;
}
.input-demo .w-input {
  margin-bottom: 10px;
}
</style>
```

:::


### 禁用状态

:::demo 通过 `disabled` 属性指定是否禁用 input 组件。

```html
<template>
  <div class="input-demo">
    <w-input v-model="input" placeholder="请输入内容" disabled></w-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```

:::


### 可清空

:::demo 使用 `clearable` 属性即可得到一个可清空的输入框

```html
<template>
  <div class="input-demo">
    <w-input v-model="input" placeholder="请输入内容" clearable></w-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```

:::


### 密码框

:::demo 使用 `show-password` 属性即可得到一个可切换显示隐藏的密码框

```html
<template>
  <div class="input-demo">
    <w-input type="password" show-password v-model="input" placeholder="请输入密码"></w-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```

:::


### 带图标的输入框

:::demo 可以通过 `prefix-icon` 和 `suffix-icon` 属性在 input 组件首部和尾部增加显示图标，也可以通过 slot 来放置图标。

```html
<template>
  <div class="input-demo">
    <w-input v-model="input" placeholder="请输入内容" prefix-icon="user"></w-input>
    <w-input v-model="input" placeholder="请输入内容" suffix-icon="circle-info"></w-input>
    <w-input v-model="input" placeholder="请输入内容">
      <w-icon name="user" slot="prefix"></w-icon>
    </w-input>
    <w-input v-model="input" placeholder="请输入内容">
      <w-icon name="circle-info" slot="suffix"></w-icon>
    </w-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: ''
    }
  }
}
</script>
```

:::


### 文本域

用于输入多行文本信息，通过将 type 属性的值指定为 textarea。

:::demo 文本域高度可通过 `rows` 属性控制

```html
<template>
  <div class="input-demo">
    <w-input type="textarea" v-model="textarea" placeholder="请输入内容" :rows="2"></w-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      textarea: ''
    }
  }
}
</script>
```

:::


### 输入长度限制


:::demo maxlength 和 minlength 是原生属性，用来限制输入框的字符长度，其中字符长度是用 Javascript 的字符串长度统计的。对于类型为 text 或 textarea 的输入框，在使用 maxlength 属性限制最大输入长度的同时，可通过设置 show-word-limit 属性来展示字数统计。

```html
<template>
  <div class="input-demo">
    <w-input v-model="input" placeholder="请输入内容" maxlength="20" show-word-limit></w-input>
    <w-input type="textarea" v-model="textarea" placeholder="请输入内容" :rows="2" maxlength="200" show-word-limit></w-input>
  </div>
</template>

<script>
export default {
  data() {
    return {
      input: '',
      textarea: ''
    }
  }
}
</script>
```

:::


### 属性

| 参数       | 说明                                    | 类型    | 是否必须  | 可选值                  | 默认值 |
| ---------- | --------------------------------------- | ------- | ------------ |----------------------- | ------ |
| value / v-model       | 绑定值                                    | string / number  | 是 | —  | —      |
| type       | 类型                                    | string  | 否 | text / textarea 更多查看MDN | text     |
| placeholder       | 输入框占位文本                    | string  | 否 |—  | — 
| disabled   | 是否禁用状态                            | boolean | 否 | —                       | false  |
| clearable       | 是否可清空                                | boolean  | 否 | —                       | false       |
| show-password       | 是否显示切换密码图标                                | boolean  | 否 | —                       | false       |
| prefix-icon       | 输入框头部图标                                | string  | 否 | —                       | —        |
| suffix-icon       | 输入框尾部图标                                | string  | 否 | —                       | —        |
| name       | 原生属性                                | string  | 否 | —                       | —        |
| rows       | textarea行数                                | number  | 否 | —                       | 2       |
| maxlength       | 原生属性，输入最大长度                                | number  | 否 | —                       | —        |
| minlength       | 原生属性，输入最小长度                                | number  | 否 | —                       | —        |
| max       | 原生属性，最大值                                | —    | 否 | —                       | —        |
| min       | 原生属性，最小值                                | —    | 否 | —                       | —        |
| step       | 原生属性，输入的数字间隔                               | —    | 否 | —                       | —        |


### 插槽

| 名称       | 说明                                    | 
| ---------- | --------------------------------------- |
| prefix       | 输入框头部内容，只对 type="text" 有效                                    | 
| suffix       | 输入框尾部内容，只对 type="text" 有效                                    | 
| prepend       | 输入框前置内容，只对 type="text" 有效                                    | 
| append       | 输入框后置内容，只对 type="text" 有效                                    | 


### 事件

| 名称       | 说明                                    |  回调参数 |
| ---------- | --------------------------------------- | ------------|
| input       | 在 Input 值改变时触发    |             | (e:Event) |
| change       | 仅在输入框失去焦点或用户按下回车时触发    | (e:Event)            |
| clear       | 在点击由 clearable 属性生成的清空按钮时触发    |  (value:string | number)          |
| blur       |在 Input 失去焦点时触发    |   (value:string | number)          |
| focus       | 在 Input 获得焦点时触发    |    —          |


### 方法

| 名称       | 说明                                    |  参数 |
| ---------- | --------------------------------------- | ------------|
| select       | 选中 input 中的文字    |             |  —  |
| blur       |使 input 失去焦点    |    —          |
| focus       | 使 input 获取焦点    |    —          |