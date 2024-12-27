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