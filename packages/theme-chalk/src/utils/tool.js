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

/**
 * 计算像素
 * @param {string,number} width1 '2px' or 2
 * @param {string,number} width2 '4px' or 4
 * @returns {string} '6px'
 */
export function calculatePixels(width1, width2) {
  // 解析宽度值，去掉 'px' 单位并转换为数字
  const numWidth1 = parseFloat(width1);
  const numWidth2 = parseFloat(width2);
  // 检查解析后的数值是否有效
  if (isNaN(numWidth1) || isNaN(numWidth2)) {
    throw new Error("请提供有效字符串");
  }
  // 计算总宽度
  const totalWidth = numWidth1 + numWidth2;
  // 返回带 'px' 单位的总宽度字符串
  return `${totalWidth}px`;
}
