/**
 * 通用获取数据类型
 * @param {*} value
 * @returns
 */
export function getType(value) {
  const type = Object.prototype.toString.call(value).slice(8, -1).toLowerCase();
  if (type === "object" && value !== null) {
    if (Array.isArray(value)) {
      return "array";
    } else if (value instanceof Date) {
      return "date";
    } else if (value instanceof RegExp) {
      return "regexp";
    } else if (value instanceof Map) {
      return "map";
    } else if (value instanceof Set) {
      return "set";
    } else if (value instanceof WeakMap) {
      return "weakmap";
    } else if (value instanceof WeakSet) {
      return "weakset";
    } else if (typeof value.then === "function") {
      return "promise";
    }
  }
  return type;
}
