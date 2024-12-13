# Descriptions 描述列表

### 基础用法

列表形式展示多个字段。

:::demo 可以不设置 `title` 属性，不设置时默认不显示标题。

```html
<template>
  <div class="descriptions-demo">
    <w-descriptions title="用户信息">
        <w-descriptions-item label="用户名">kooriookami</w-descriptions-item>
        <w-descriptions-item label="手机号">18100000000</w-descriptions-item>
        <w-descriptions-item label="居住地">苏州市</w-descriptions-item>
        <w-descriptions-item label="备注">学校</w-descriptions-item>
        <w-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</w-descriptions-item>
    </w-descriptions>
  </div>
</template>
```

:::

### UIUE规范常见用法

1. label标题最大宽度7个文字，超出换行，并且冒号位于第一行末尾。
   1. 7个文字宽度为 102px，超出换行。
   2. 6个文字宽度为 84px，超出换行。
   3. 5个文字宽度为 70px，超出换行。
   4. 4个文字宽度为 56px，超出换行。
   5. 3个文字宽度为 42px，超出换行。
   6. 2个文字宽度为 28px，超出换行。
2. label标题右侧冒号垂直对齐。

:::demo 可以通过`labelWidth`设置标签宽度，`labelAlign`设置标签对齐方式。

```html
<template>
  <div class="descriptions-demo">
    <w-descriptions title="用户信息" labelWidth="56px" labelAlign="right">
        <w-descriptions-item label="用户名">kooriookami</w-descriptions-item>
        <w-descriptions-item label="手机号">18100000000</w-descriptions-item>
        <w-descriptions-item label="居住地">苏州市</w-descriptions-item>
        <w-descriptions-item label="备注">学校</w-descriptions-item>
        <w-descriptions-item label="联系地址">江苏省苏州市吴中区吴中大道 1188 号</w-descriptions-item>
    </w-descriptions>
  </div>
</template>
```

:::

### 设置每项所占列数

1. 每项结尾占满剩余列数，例如：第二行联系地址结尾，沾满剩余两列。
2. 如果有新增内容，则需要设置对应的span列数，例如：个人信息列新增，联系地址则需要设置span为2。


:::demo 列表默认占3列，可以通过`column`设置，子标签可以通过`span`设置所占列数。

```html
<template>
  <div class="descriptions-demo" column="3">
    <w-descriptions title="用户信息" labelWidth="56px" labelAlign="right">
        <w-descriptions-item label="用户名">kooriookami</w-descriptions-item>
        <w-descriptions-item label="手机号">18100000000</w-descriptions-item>
        <w-descriptions-item label="居住地">苏州市</w-descriptions-item>
        <w-descriptions-item label="备注">学校</w-descriptions-item>
        <w-descriptions-item label="联系地址" span="2">江苏省苏州市吴中区吴中大道 1188 号九栋2单元5层501</w-descriptions-item>
        <w-descriptions-item label="个人信息">公民个人信息包括基本信息（姓名、出生日期）、身份识别信息（身份证件号码）、生物识别信息（指纹、面部特征）、住址和联系方式（电话号码、电子邮箱、住址）、健康信息和行踪信息等</w-descriptions-item>
    </w-descriptions>
  </div>
</template>
```

:::


### w-descriptions 属性

| 参数       | 说明                                    | 类型    | 可选值                  | 默认值 |
| ---------- | --------------------------------------- | ------- | ----------------------- | ------ |
| title       | 标题文本                                    | string  | — | —      |
| column       | 一行显示`w-descriptions-item`的数量                                    | string / number  | — | 3 |
| colon    | label是否显示冒号                          | boolean | —                       | true  |
| ellipsis | 内容超出一行是否显示省略号（默认换行）                  | boolean | —                       | false  |
| labelWidth   | label宽度                            | string | —                       | false  |
| labelAlign       | label对齐方式                                | string  | left / center / right                       |    left    |


### w-descriptions 插槽

| 名称       | 说明                                    | 
| ---------- | --------------------------------------- | 
| —       | 默认插入`w-descriptions-item`标签                                    | 
| title       | 自定义标题，显示在左上方                                    | 


### w-descriptions-item 属性

| 参数       | 说明                                    | 类型    | 可选值                  | 默认值 |
| ---------- | --------------------------------------- | ------- | ----------------------- | ------ |
| label       | 标签文本                                    | string  | — | —      |
| span       | 列所占数量              | string / number  | — | 1 |
