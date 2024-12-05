# Icon 图标

提供了一套常用的图标集合，由 svg 图片和 svg-icon 组件实现。

### 使用方法

直接通过设置类名为 iconName 来使用即可。例如：

:::demo

```html
<template>
  <div class="icon-demo">
    <w-svg-icon name="line-add" color="#000" size="24"></w-svg-icon>
    <w-svg-icon name="line-edit" color="#000" size="24"></w-svg-icon>
    <w-svg-icon name="line-delete" color="#000" size="24"></w-svg-icon>
    <w-button type="primary" icon="line-search">搜索</w-button>
  </div>
</template>

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

### 图标集合

注意：hover 时图标没有变化的，使用时需要添加`stroke`属性。

:::demo

```html
<template>
  <div class="icon-demo2">
    <div class="list-item" v-for="(item, index) in list" :key="item + index">
      <h4>{{ item.title }}</h4>
      <ul class="icon-list">
        <li v-for="(sub, i) in item.iconList" :key="sub + i">
          <span class="li-span">
            <w-svg-icon
              :name="sub"
              color="#000"
              size="32"
              stroke
              v-if="showStroke(sub)"
            ></w-svg-icon>
            <w-svg-icon :name="sub" color="#000" size="32" v-else></w-svg-icon>
            <span class="icon-name">{{ sub }}</span>
          </span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        list: [
          {
            title: "通用名词",
            iconList: this.$commonIcon,
          },
          {
            title: "提示状态",
            iconList: this.$tipIcon,
          },
        ],
      };
    },
    methods: {
      showStroke(iconName) {
        const whiteList = ["line-plus"];
        return whiteList.includes(iconName);
      },
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
    width: 16.66%;
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
  .icon-list li:hover .w-svg-icon {
    fill: #c20000 !important;
  }
  .icon-list li:hover .icon-name {
    color: #c20000 !important;
  }
  .icon-list li .w-svg-icon {
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

### 属性

| 参数   | 说明                                    | 类型            | 可选值 | 默认值 |
| ------ | --------------------------------------- | --------------- | ------ | ------ |
| name   | 图标名称                                | string          | —      | —      |
| size   | 尺寸                                    | string / number | —      | 16     |
| color  | 图标颜色                                | string          | —      | —      |
| stroke | 图标是否描边(少数 svg 通过 stroke 绘制) | boolean         | —      | false  |
