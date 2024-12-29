import { getType } from './types.js';
/**
 * 函数重载
 * 基于参数类型映射实现
 * @returns
 * example:
 * const overload = createOverload();
 * overload.add("string", "number", (a, b) => a + b);
 * overload.add("string", "string", (a, b) => a + b);
 */
function createOverload() {
  const fnMap = new Map();
  function overload(...args) {
    const key = args.map((arg) => getType(arg)).join(",");
    const fn = fnMap.get(key);
    if (!fn) {
      throw new Error("请添加对应的函数实现");
    }
    return fn.apply(this, args);
  }
  overload.add = function (...args) {
    const fn = args.pop();
    if (getType(fn) !== "function") {
      throw new Error("最后一个参数必须是函数");
    }
    const key = args.join(",");
    fnMap.set(key, fn);
  };
  return overload;
}

export default createOverload;
