# Icon

提供了一套常用的图标集合，由字体图标实现。

### 使用方法

直接通过设置类名为 iconName 来使用即可。例如：

:::demo

```html
<template>
  <div class="icon-demo">
    <w-icon name="house" size="2x"></w-icon>
    <w-icon name="house" size="2x" flip="vertical"></w-icon>
    <w-icon name="house" size="2x" rotate="90"></w-icon>
    <w-icon name="spinner" size="2x" spin></w-icon>
    <w-icon name="spinner" size="2x" pulse></w-icon>
  </div>
</template>

<style>
.icon-demo {
  display: flex;
  align-items: center;
  margin-bottom: 5px;
}
.w-icon {
  margin-right: 30px;
}
</style>
```

:::


### 图标集合

点击图标进行复制

:::demo

```html
<template>
  <div class="icon-demo2">
    <div class="list-item" v-for="(item, index) in $icon" :key="item + index">
      <h4>{{ item.title }}</h4>
      <ul class="icon-list" @click="handleClick"> 
        <li v-for="(sub, i) in item.list" :key="sub + i" :data-icon="sub">
          <span class="li-span">
            <w-icon :name="sub" size="2x"></w-icon>
            <span class="icon-name">{{ sub }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    methods: {
      showStroke(iconName) {
        const whiteList = ["line-plus"];
        return whiteList.includes(iconName);
      },
      handleClick(e) {
        // 检查点击的目标是否为 .icon-name 或 w-icon 组件
        if (e.target.closest('.icon-name') || e.target.closest('w-icon') || e.target.closest('span.li-span') || e.target.closest('.icon-list li')) {
          // 获取最近的 li 元素上的 data-icon 属性值
          const liElement = e.target.closest('li');
          if (liElement) {
            const iconName = liElement.getAttribute('data-icon');
            let text = "";
            if (iconName === 'spinner') {
              text = `<w-icon name="${iconName}" pulse />`;
            } else {
              const text = `<w-icon name="${iconName}" />`;
            }
            this.$copy(text); 
            alert('复制成功');
          }
        }
      }
    },
  };
</script>

<style>
  ul,
  li {
    list-style: none;
  }
</style>
<style>
  .icon-list {
    border: 1px solid #eee;
    padding: 0;
    margin: 0;
    display: flex;
    flex-wrap: wrap;
  }
  .icon-list li {
    position: relative;
    display: flex;
    width: 16.64%;
    text-align: center;
    height: 120px;
    line-height: 120px;
    color: #666;
    font-size: 13px;
    border-right: 1px solid #eee;
    border-bottom: 1px solid #eee;
    margin-right: -1px;
    margin-bottom: -1px;
    cursor: pointer;
  }
  .icon-list li:hover .w-icon {
    fill: #c20000 !important;
    color: #c20000 !important;
  }
  .icon-list li:hover .icon-name {
    color: #c20000 !important;
  }
  .icon-list li .w-icon {
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .icon-list li .icon-name {
    position: absolute;
    width: 100%;
    line-height: 15px;
    bottom: 15px;
    left: 50%;
    transform: translateX(-50%);
  }
  .icon-list li .li-span {
    display: flex;
    flex-direction: column;
    width: 100%;
  }
  .icon-demo2 {
    /* display: flex; */
    align-items: center;
    margin-bottom: 5px;
  }
  .w-svg-icon {
    margin-right: 30px;
  }
  .list-item h4 {
    text-align: center;
  }
</style>
```
:::

更多图标可以参考Font Awesome官网：[https://fontawesome.com/v6/search?o=r&m=free&s=solid](https://fontawesome.com/v6/search?o=r&m=free&s=solid)

### 属性

| 参数   | 说明                                    | 类型           | 是否必须 | 可选值 | 默认值 |
| ------ | --------------------------------------- | ---------------| ------ | ------ | ------ |
| name   | 图标名称                                | string          | 是 | —      | —      |
| size   | 相对尺寸                                    | string / number | 否 | xs / sm / lg / xl / 1x / 2x / ...      | 1x     |
| color  | 图标颜色                                | string          | 否 | —      | —      |
| flip  | 图标翻转                                | string          | 否 | horizontal / vertical / both      | —      |
| rotate  | 图标旋转角度                                | string / number          | 否 | —      | —      |
| spin  | 图标自动旋转动画                                | boolean          | 否 | —      | —      |
| pulse  | 图标脉冲旋转动画                                | boolean          | 否 | —      | —      |
