# to 

异步等待封装器，便于错误处理，不需要try-catch。

调用：`this.$to(promise, errorExt)`

调用：`this.$to(promise, errorHandler)`

参数：
```
* @param { Promise } promise - 需要处理的 Promise
* @param { Object | Function } errorExt，errorHandler - 额外的错误信息或自定义错误处理函数
* @returns { Promise<[Error | null, undefined] >} 返回错误和数据的元组
```

### 示例

:::demo 使用`type`属性来定义 Button 的样式。

```html
<template>
  <div class="button-demo">
    <p>状态：{{ status }}</p>
    <p>错误：{{ error }}</p>
    <p>数据：{{ data }}</p>
    <w-button @click="handleRefresh">重新请求</w-button>
  </div>
</template>

<script>
export default {
    data() {
        return {
            error: null,
            data: null,
            status: '',
        };
    },
    mounted() {
        this.handleTo();
    },
    methods: {
        async handleTo() {
            const fetchData = () => {
                return new Promise((resolve, reject) => {
                    // 模拟异步操作
                    setTimeout(() => {
                        const success = Math.random() > 0.5;
                        if (success) {
                            resolve('数据加载成功');
                        } else {
                            reject(new Error('数据加载失败'));
                        }
                    }, 1000);
                });
            };
            this.status = '加载中...';
            const [err, data] = await this.$to(fetchData(), {});
            if (err) {
                console.error('发生错误:', err);
                this.status = '加载失败';
                this.error = err;
            } else {
                console.log('数据:', data);
                this.status = '加载成功';
                this.data = data;
            }
        },
        handleRefresh() {
            this.error = null;
            this.data = null;
            this.status = '';
            this.handleTo();
        }
    }
}
</script>
```

:::