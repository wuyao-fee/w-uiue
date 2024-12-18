export let isFunction = (functionToCheck) => {
  let getType = {};
  return (
    functionToCheck &&
    getType.toString.call(functionToCheck) === "[object Function]"
  );
};

export function isObject(value) {
  // 检查 null 和非对象类型
  if (value == null || typeof value !== "object") return false;

  // 排除数组和函数
  if (Array.isArray(value) || typeof value === "function") return false;

  // 获取对象的构造函数
  const proto = Object.getPrototypeOf(value);

  // 如果没有原型或者原型是 Object.prototype，则认为是一个普通对象
  return proto === null || proto === Object.prototype;
}
