/**
 * 通用防抖函数
 * @param {*} func
 * @param {*} wait
 * @returns
 */
export function debounce(func, wait) {
  let timeout;
  return function (...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), wait);
  };
}
