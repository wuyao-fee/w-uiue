# createOverload 函数重载

调用：`this.$createOverload()`

### add()

实例方法，用于添加新的函数重载实现。

参数：
```
* @param { String } type - 函数重载的参数类型
··· n个参数类型，根据函数实现的需要添加
* @param { Function } fn - 函数重载的实现函数
* @returns { Function } - 返回添加的函数重载实现
```

### 示例

:::demo 

```html
<template>
  <div class="createOverload-demo">
    <w-button @click="handleClick(1)">获取所有用户</w-button>
    <w-button @click="handleClick(2)">获取第几页用户</w-button>
    <w-button @click="handleClick(3)">获取指定用户</w-button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            getUsers: null
        }
    },
    mounted() {
        // 创建一个函数重载
        this.getUsers = this.$createOverload();
        // 添加函数实现
        this.getUsers.add(() => {
            console.log('获取所有用户');
            this.$message.success('获取所有用户');
        });
        this.getUsers.add('number', (page) => {
            console.log('获取第', page, '页用户');
            this.$message.success('获取第' + page + '页用户');
        });
        this.getUsers.add('string', (name) => {
            console.log('获取指定用户', name);
            this.$message.success('获取指定用户' + name);
        });
    },
    methods: {
        handleClick(type) {
            if (type === 1) {
                this.getUsers();
            }
            if (type === 2) {
                this.getUsers(2);
            }
            if (type === 3) {
                this.getUsers('张三');
            }
        }
    }
}
</script>

<style>
.createOverload-demo {
    display: flex;
}
</style>
```

:::


### 旧版实现思路 - 目前不推荐 - jQuery作者实现

基于函数参数的个数来决定调用哪个函数实现。

存在的问题：

1.参数个数相同时，无法区分调用哪个函数实现。

2.无法区分参数类型。

3.必须要创建一个对象，通过对象的方式来调用函数，`对象.方法()`。

参数：
```
* @param { Object } obj - 函数重载的对象
* @param { String } name - 函数重载的方法名
* @param { Function } fn - 函数重载的实现函数
* @returns { Function } - 返回添加的函数重载实现
```

函数实现：
```
function addMethod(obj, name, fn) {
    const old = obj[name];
    obj[name] = function() {
        if (fn.length === arguments.length) {
            return fn.apply(this, arguments);
        } else if (typeof old === 'function') {
            return old.apply(this, arguments);
        }
    }
}
```

使用：
```
const obj = {};
addMethod(obj, 'getUsers', function() {
    console.log('获取所有用户');
});
addMethod(obj, 'getUsers', function(page) {
    console.log('获取第', page, '页用户');
});
addMethod(obj, 'getUsers', function(name) {
    console.log('获取指定用户', name);
});
obj.getUsers(); // 获取所有用户
obj.getUsers(2); // 获取第2页用户
obj.getUsers('张三'); // 获取指定用户张三
```