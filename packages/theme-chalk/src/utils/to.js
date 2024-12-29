import createOverload from "./createOverload.js";

/**
 * @param { Promise } promise - 需要处理的 Promise
 * @param { Object | Function } errorExt，errorHandler - 额外的错误信息或自定义错误处理函数
 * @returns { Promise<[Error | null, undefined] >} 返回错误和数据的元组
 * @example
 * const [err, data] = await to(Promise);
 * if (err) {
 *   // 处理错误
 *   return;
 * }
 */
const to = createOverload();

/**
 * 处理 Promise 的结果，将结果和错误分别返回
 */
to.add('promise', 'object', (promise, errorExt = {}) => {
  return promise
    .then((data) => [null, data])
    .catch((err) => {
      if (errorExt) {
        // 扩展错误对象
        const parsedError = Object.assign({}, err, errorExt);
        return [parsedError, undefined];
      }
      return [err, undefined];
    });
});

/**
 * 处理 Promise 的结果，将结果和错误分别返回，并允许自定义错误处理函数
 */
to.add('promise', 'function', (promise, errorHandler) => {
  return promise
    .then((data) => [null, data])
    .catch((err) => {
      if (typeof errorHandler === "function") {
        // 使用自定义错误处理函数
        const handledError = errorHandler(err);
        return [handledError, undefined];
      }
      return [err, undefined];
    });
});

export default to;
