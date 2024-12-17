# Message 消息提示

常用于主动操作后的反馈提示。与 Notification 的区别是后者更多用于系统级通知的被动提醒。

### 基础用法

基础的按钮用法。

:::demo w-uiue 注册了一个$message方法用于调用，Message 可以接收一个字符串作为参数，它会被显示为正文内容。。

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
      this.$message.info("这是一条消息提示");
    },
  },
}
</script>
```

:::
