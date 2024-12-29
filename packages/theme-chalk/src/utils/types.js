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

/**
 * 获取数据的详细类型
 * @param {any} data - 需要判断类型的数据
 * @param {boolean} [lowercase=true] - 是否返回小写字符串
 * @returns {string} 返回数据类型字符串
 */
export function getType(data, lowercase = true) {
  // 处理 null 和 undefined
  if (data === null) return "Null";
  if (data === undefined) return "Undefined";

  // 获取对象的内部 [[Class]] 属性
  const type = Object.prototype.toString.call(data).slice(8, -1);

  // 根据 lowercase 参数决定返回大写还是小写
  return lowercase ? type.toLowerCase() : type;
}

/**
 * 类型判断工具集
 */
export const typeUtils = {
  isString: (data) => getType(data) === "String",
  isNumber: (data) => getType(data) === "Number",
  isBoolean: (data) => getType(data) === "Boolean",
  isNull: (data) => data === null,
  isUndefined: (data) => data === undefined,
  isFunction: (data) => getType(data) === "Function",
  isArray: (data) => Array.isArray(data),
  isObject: (data) => getType(data) === "Object",
  isDate: (data) => getType(data) === "Date",
  isRegExp: (data) => getType(data) === "RegExp",
  isPromise: (data) => getType(data) === "Promise",
  isSet: (data) => getType(data) === "Set",
  isMap: (data) => getType(data) === "Map",
  isSymbol: (data) => getType(data) === "Symbol",
  isBigInt: (data) => getType(data) === "BigInt",

  // 额外的实用方法
  // null、undefined、空字符串、空数组、空Set、空Map、空对象都视为空
  isEmpty: (data) => {
    if (data === null || data === undefined) return true;
    if (typeof data === "string" || Array.isArray(data))
      return data.length === 0;
    if (data instanceof Set || data instanceof Map) return data.size === 0;
    if (typeof data === "object") return Object.keys(data).length === 0;
    return false;
  },

  // 判断是否是纯对象
  // 通过对象字面量 {} 创建的对象
  // 通过 new Object() 创建的对象
  // 原型链指向 Object.prototype 或 null 的对象
  isPlainObject: (data) => {
    if (getType(data) !== "Object") return false;
    const proto = Object.getPrototypeOf(data);
    return proto === null || proto === Object.prototype;
  },
};
