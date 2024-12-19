# Message 消息提示

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

### 基础用法

基础的按钮用法。

:::demo w-uiue 注册了一个$message方法用于调用，Message 可以接收一个字符串作为参数，它会被显示为正文内容。

```html
<template>
  <div class="message-demo">
    <w-button @click="handleClick">打开消息提示</w-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$message.info('这是一条消息提示');
    },
  },
}
</script>
```

:::


### 不同状态

用来显示「成功、警告、消息、错误、帮助」类的操作反馈。。

:::demo 当需要自定义更多属性时，Message 也可以接收一个对象为参数。

```html
<template>
  <div class="message-demo" style="display: flex">
    <w-button @click="handleClick">成功</w-button>
    <w-button @click="handleClick2">警告</w-button>
    <w-button @click="handleClick3">消息</w-button>
    <w-button @click="handleClick4">失败</w-button>
    <w-button @click="handleClick5">帮助</w-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$message({
        type: 'success',
        message: '这是一条成功消息',
      });
    },
    handleClick2() {
      this.$message({
        type: 'warning',
        message: '这是一条警告消息',
      });
    },
    handleClick3() {
      this.$message({
        type: 'info',
        message: '这是一条消息提示',
      });
    },
    handleClick4() {
      this.$message({
        type: 'error',
        message: '这是一条失败消息',
      });
    },
    handleClick5() {
      this.$message({
        type: 'help',
        message: '这是一条帮助消息',
      });
    },
  },
}
</script>
```

:::

### 可关闭

可以添加关闭按钮。

:::demo 默认的 Message 是不可以被人工关闭的，如果需要可手动关闭的 Message，可以使用showClose字段。此外，和 Notification 一样，Message 拥有可控的duration，设置0为不会被自动关闭，默认为 3000 毫秒。

```html
<template>
  <div class="message-demo" style="display: flex">
    <w-button @click="handleClick">成功-默认3秒后自动关闭</w-button>
    <w-button @click="handleClick2">警告-shoeClose手动关闭</w-button>
    <w-button @click="handleClick3">消息-duration为0不会自动关闭</w-button>
  </div>
</template>

<script>
export default {
  methods: {
    handleClick() {
      this.$message({
        type: 'success',
        message: '这是一条成功消息',
      });
    },
    handleClick2() {
      this.$message({
        type: 'warning',
        message: '这是一条警告消息',
        showClose: true,
      });
    },
    handleClick3() {
      this.$message({
        type: 'info',
        message: '这是一条消息提示',
        showClose: true,
        duration: 0,
      });
    },
  },
}
</script>
```

:::

### 配置项

| 参数   | 说明                                    | 类型           | 是否必须 | 可选值 | 默认值 |
| ------ | --------------------------------------- | ---------------| ------ | ------ | ------ |
| type   | 消息类型                                | string          | 是 | success/warning/info/error/help      | —      |
| message   | 消息内容                             | string | 否 | —      | —     |
| duration  | 显示毫秒。0则不会关闭                                | number          | 否 | —      | 3000      |
| offset  | 距离顶部距离,单位px                                | number          | 否 | —      | 20      |
| showClose  | 是否显示关闭按钮                                | boolean          | 否 | —      | false      |
| onClose  | 关闭回调，参数为实例                                | function          | 否 | —      | —      |
