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

/**
 * 复制到剪贴板
 * @param {*} text
 * @returns
 */
export function copyToClipboard(text) {
  const textarea = document.createElement("textarea");
  textarea.value = text;
  document.body.appendChild(textarea);
  textarea.select();
  navigator.clipboard.writeText(text);
  document.body.removeChild(textarea);
  return true;
}
