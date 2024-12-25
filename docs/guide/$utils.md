# $utils工具方法

### debounce

防抖函数

调用：`this.$utils.debounce(fn, delay)`

参数：
```
* @param { Function } fn 需要防抖的函数
* @param { Number } delay 延迟时间
* @returns { Function } 返回一个防抖函数
```


### throttle

节流函数

调用：`this.$utils.throttle(fn, delay)`

参数：
```
* @param { Function } fn 需要节流的函数
* @param { Number } delay 延迟时间
* @returns { Function } 返回一个节流函数
```


### copyToClipboard

复制到剪贴板

调用：`this.$utils.copyToClipboard(text)`

参数：
```
* @param { String } text - 要复制的文本
* @returns { Promise<Boolean> } 是否复制成功
```


### calculatePixels

计算像素

调用：`this.$utils.calculatePixels(pixel, pixel2)`

参数：
```
* @param { String } pixel 需要计算的像素
* @param { String } pixel2 需要计算的像素
* @returns { Number } 返回计算后的像素
```


### isObject

判断是否是对象

调用：`this.$utils.isObject(obj)`

参数：
```
* @param { Any } obj 需要判断的对象
* @returns { Boolean } 返回是否是对象
```


### isFunction

判断是否是函数

调用：`this.$utils.isFunction(fn)`

参数：
```
* @param { Any } fn 需要判断的函数
* @returns { Boolean } 返回是否是函数
```


### UUIDv4

生成UUIDv4

调用：`this.$utils.UUIDv4()`

参数：
```
* @returns { String } 返回生成的UUIDv4
```


### randomString

生成随机字符串

调用：`this.$utils.randomString(options = {})`

参数：
```
* @param { String } prefix 随机字符串前缀，默认""
* @param { Number } length 随机字符串长度，默认16位
* @param { Boolean } onlyNumbers 是否只生成数字，默认false
* @param { Boolean } useTimestamp 是否使用时间戳，默认true
* @returns { String } 返回生成的随机字符串
```


### formatDate

格式化日期

调用：`this.$utils.formatDate(date, format = 'YYYY-MM-DD HH:mm:ss')`

参数：
```
* @param { Date | number | string } date - 日期对象、时间戳或日期字符串
* @param { string } format - 格式化模式字符串
* @returns { string } 格式化后的日期字符串
```


### deepClone

深度克隆

调用：`this.$utils.deepClone(data, hash = new WeakMap())`

参数：
```
* @param { any } data - 需要深拷贝的数据
* @param { WeakMap } [hash=new WeakMap()] - 用于处理循环引用
* @returns { any } 深拷贝后的数据
```


### parseUrlParams

解析URL参数

调用：`this.$utils.parseUrlParams(url = window.location.href)`

参数：
```
* @param { string } [url=window.location.href] - URL字符串
* @returns { Object } 解析后的参数对象
```


### objectToUrlParams

将对象转换为URL参数

调用：`this.$utils.objectToUrlParams(data)`

参数：
```
* @param { Object } data - 需要转换的对象
* @returns { string } URL参数字符串
```
