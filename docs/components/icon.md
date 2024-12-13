# Icon

### 使用方法

直接通过设置类名为 iconName 来使用即可。例如：

:::demo

```html
<template>
  <div class="icon-demo">
    {{ $icon.common }} {{ $icon.tip }}
  </div>
</template>

<script>
  export default {
    name: 'IconDemo',
    data() {
      return {
        icon: 'line-add'
      }
    }
  }
</script>

<style>
  .icon-demo {
    display: flex;
    align-items: center;
    margin-bottom: 5px;
  }
  .w-svg-icon {
    margin-right: 30px;
  }
</style>
```

:::