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
* @param { String } text 需要复制的文本
* @returns { Boolean } 返回是否复制成功
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
