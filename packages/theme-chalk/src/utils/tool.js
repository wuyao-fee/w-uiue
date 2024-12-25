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
 * 通用节流函数
 * @param {*} fn
 * @param {*} wait
 * @returns
 */
export function throttle(fn, wait) {
  let lastCall = 0;
  return function (...args) {
    const now = new Date().getTime();
    if (now - lastCall >= wait) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// /**
//  * 复制到剪贴板
//  * @param {*} text
//  * @returns
//  */
// export function copyToClipboard(text) {
//   const textarea = document.createElement("textarea");
//   textarea.value = text;
//   document.body.appendChild(textarea);
//   textarea.select();
//   navigator.clipboard.writeText(text);
//   document.body.removeChild(textarea);
//   return true;
// }

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

/**
 * 生成标准的 UUID v4
 * 格式：xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
 * 其中 x 是任意十六进制数字，y 是 8、9、A 或 B
 */
export function UUIDv4() {
  // 检查是否支持 crypto API
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    // 创建 16 字节（128位）的随机数组
    const buffer = new Uint8Array(16);
    crypto.getRandomValues(buffer);

    // 设置版本（version 4）和变体（variant 1）
    buffer[6] = (buffer[6] & 0x0f) | 0x40; // version 4
    buffer[8] = (buffer[8] & 0x3f) | 0x80; // variant 1

    // 转换为十六进制字符串并添加连字符
    const hexDigits = [];
    for (let i = 0; i < 16; i++) {
      hexDigits.push(buffer[i].toString(16).padStart(2, "0"));
    }

    return [
      hexDigits.slice(0, 4).join(""),
      hexDigits.slice(4, 6).join(""),
      hexDigits.slice(6, 8).join(""),
      hexDigits.slice(8, 10).join(""),
      hexDigits.slice(10, 16).join(""),
    ].join("-");
  } else {
    // 降级方案：使用 Math.random()
    let d = new Date().getTime();
    return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      function (c) {
        const r = (d + Math.random() * 16) % 16 | 0;
        d = Math.floor(d / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      }
    );
  }
}

/**
 * 生成随机字符串
 * @param {*} options
 * @returns
 */
export function randomString(options = {}) {
  const {
    prefix = "", // ID前缀
    length = 16, // ID长度（不包含前缀）
    onlyNumbers = false, // 是否只使用数字
    useTimestamp = true, // 是否使用时间戳
  } = options;

  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const numbers = "0123456789";
  const chars = onlyNumbers ? numbers : letters + numbers;

  let id = prefix;

  // 添加时间戳部分
  if (useTimestamp) {
    // 当要求全数字时，使用最后几位时间戳
    if (onlyNumbers) {
      id += Date.now().toString().slice(-8);
    } else {
      id += Date.now().toString(36);
    }
  }

  // 计算还需要补充的随机字符长度
  const remainingLength = length - (id.length - prefix.length);

  // 使用 crypto API 生成随机字符（如果可用）
  if (typeof crypto !== "undefined" && crypto.getRandomValues) {
    const randomValues = new Uint32Array(remainingLength);
    crypto.getRandomValues(randomValues);

    for (let i = 0; i < remainingLength; i++) {
      id += chars.charAt(randomValues[i] % chars.length);
    }
  } else {
    // 降级使用 Math.random()
    for (let i = 0; i < remainingLength; i++) {
      id += chars.charAt(Math.floor(Math.random() * chars.length));
    }
  }

  return id;
}

/**
 * 日期格式化函数
 * @param {Date|number|string} date - 日期对象、时间戳或日期字符串
 * @param {string} format - 格式化模式字符串
 * @returns {string} 格式化后的日期字符串
 *
 * 支持的格式化模式：
 * YYYY: 四位年份
 * YY: 两位年份
 * MM: 月份（补零）
 * M: 月份（不补零）
 * DD: 日期（补零）
 * D: 日期（不补零）
 * HH: 小时（24小时制，补零）
 * H: 小时（24小时制，不补零）
 * hh: 小时（12小时制，补零）
 * h: 小时（12小时制，不补零）
 * mm: 分钟（补零）
 * m: 分钟（不补零）
 * ss: 秒钟（补零）
 * s: 秒钟（不补零）
 * SSS: 毫秒（补零到3位）
 * A: AM/PM（大写）
 * a: am/pm（小写）
 * Q: 季度
 * W: 星期（中文）
 * w: 星期（英文）
 */
export function formatDate(date, format = "YYYY-MM-DD HH:mm:ss") {
  // 转换输入的日期为Date对象
  const d = date instanceof Date ? date : new Date(date);

  // 如果日期无效，返回空字符串
  if (isNaN(d.getTime())) {
    return "";
  }

  const year = d.getFullYear();
  const month = d.getMonth() + 1;
  const day = d.getDate();
  const hour24 = d.getHours();
  const hour12 = hour24 % 12 || 12;
  const minute = d.getMinutes();
  const second = d.getSeconds();
  const millisecond = d.getMilliseconds();
  const isAM = hour24 < 12;

  // 中英文星期数组
  const weeks = {
    zh: ["日", "一", "二", "三", "四", "五", "六"],
    en: [
      "Sunday",
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
  };

  // 格式化映射对象
  const formatMap = {
    YYYY: year,
    YY: (year + "").slice(-2),
    MM: padZero(month),
    M: month,
    DD: padZero(day),
    D: day,
    HH: padZero(hour24),
    H: hour24,
    hh: padZero(hour12),
    h: hour12,
    mm: padZero(minute),
    m: minute,
    ss: padZero(second),
    s: second,
    SSS: padZero(millisecond, 3),
    A: isAM ? "AM" : "PM",
    a: isAM ? "am" : "pm",
    Q: Math.ceil(month / 3),
    W: `星期${weeks.zh[d.getDay()]}`,
    w: weeks.en[d.getDay()],
  };

  // 替换格式化字符串
  return format.replace(
    /\[([^\]]+)\]|YYYY|YY|MM|M|DD|D|HH|H|hh|h|mm|m|ss|s|SSS|A|a|Q|W|w/g,
    (match, $1) => $1 || formatMap[match]
  );
}

/**
 * 补零函数
 * @param {number} num - 需要补零的数字
 * @param {number} targetLength - 目标长度
 * @returns {string} 补零后的字符串
 */
function padZero(num, targetLength = 2) {
  return num.toString().padStart(targetLength, "0");
}

/**
 * 增强版深拷贝函数
 * @param {any} data - 需要深拷贝的数据
 * @param {WeakMap} [hash=new WeakMap()] - 用于处理循环引用
 * @returns {any} 深拷贝后的数据
 */
export function deepClone(data, hash = new WeakMap()) {
  // 处理基本类型和函数
  if (data === null || typeof data !== "object") {
    return data;
  }

  // 处理循环引用
  if (hash.has(data)) {
    return hash.get(data);
  }

  // 处理特殊对象类型
  const Constructor = data.constructor;
  switch (Constructor) {
    // 处理日期对象
    case Date:
      return new Date(data.getTime());

    // 处理正则对象
    case RegExp:
      return new RegExp(data.source, data.flags);

    // 处理 Map
    case Map: {
      const newMap = new Map();
      hash.set(data, newMap);
      for (let [key, value] of data) {
        newMap.set(deepClone(key, hash), deepClone(value, hash));
      }
      return newMap;
    }
    // 处理 Set
    case Set: {
      const newSet = new Set();
      hash.set(data, newSet);
      for (let item of data) {
        newSet.add(deepClone(item, hash));
      }
      return newSet;
    }
    // 处理 Error 对象
    case Error: {
      const newError = new Error(data.message);
      newError.stack = data.stack;
      newError.name = data.name;
      return newError;
    }
    // 处理 ArrayBuffer
    case ArrayBuffer:
      return data.slice(0);

    // 处理 TypedArray
    case Int8Array:
    case Uint8Array:
    case Uint8ClampedArray:
    case Int16Array:
    case Uint16Array:
    case Int32Array:
    case Uint32Array:
    case Float32Array:
    case Float64Array:
    // eslint-disable-next-line
    case BigInt64Array:
    // eslint-disable-next-line
    case BigUint64Array:
      return new Constructor(data);

    // 处理 DataView
    case DataView:
      return new DataView(
        deepClone(data.buffer),
        data.byteOffset,
        data.byteLength
      );

    // 处理 Symbol 和 BigInt 包装对象
    case Symbol:
    // eslint-disable-next-line
    case BigInt:
      return Object(Constructor.prototype.valueOf.call(data));
  }

  // 处理数组和普通对象
  const cloneData = Array.isArray(data)
    ? []
    : Object.create(Object.getPrototypeOf(data));

  // 记录已克隆的对象，避免循环引用
  hash.set(data, cloneData);

  // 处理不可枚举属性和Symbol属性
  const allProps = [
    ...Object.getOwnPropertyNames(data),
    ...Object.getOwnPropertySymbols(data),
  ];

  for (let prop of allProps) {
    const descriptor = Object.getOwnPropertyDescriptor(data, prop);
    // 如果属性是访问器属性
    if (descriptor.get || descriptor.set) {
      Object.defineProperty(cloneData, prop, descriptor);
    } else {
      cloneData[prop] = deepClone(data[prop], hash);
    }
  }

  return cloneData;
}

/**
 * URL参数解析
 * @param {string} [url=window.location.href] - URL字符串
 * @returns {Object} 解析后的参数对象
 */
export function parseUrlParams(url = window.location.href) {
  const params = {};
  try {
    const searchParams = new URL(url).searchParams;
    for (let [key, value] of searchParams) {
      // 处理数组参数
      if (params[key]) {
        params[key] = Array.isArray(params[key])
          ? [...params[key], value]
          : [params[key], value];
      } else {
        params[key] = value;
      }
    }
  } catch (e) {
    console.error("URL解析错误:", e);
  }
  return params;
}

/**
 * 对象转URL参数
 * @param {Object} data - 需要转换的对象
 * @returns {string} URL参数字符串
 */
export function objectToUrlParams(data) {
  if (!data) return "";
  return (
    Object.entries(data)
      // eslint-disable-next-line
      .filter(([_, value]) => value != null && value !== "")
      .map(([key, value]) => {
        if (Array.isArray(value)) {
          return value
            .map((v) => `${encodeURIComponent(key)}=${encodeURIComponent(v)}`)
            .join("&");
        }
        return `${encodeURIComponent(key)}=${encodeURIComponent(value)}`;
      })
      .join("&")
  );
}

/**
 * 复制文本到剪贴板
 * @param {string} text - 要复制的文本
 * @returns {Promise<boolean>} 是否复制成功
 */
export function copyToClipboard(text) {
  return new Promise((resolve, reject) => {
    // 优先使用 navigator.clipboard API
    if (navigator.clipboard && window.isSecureContext) {
      // 安全上下文（https 或 localhost）下使用 clipboard API
      navigator.clipboard
        .writeText(text)
        .then(() => resolve(true))
        .catch((err) => {
          console.warn("Clipboard API failed:", err);
          // 降级使用其他方法
          fallbackCopyToClipboard(text, resolve, reject);
        });
    } else {
      // 降级使用其他方法
      fallbackCopyToClipboard(text, resolve, reject);
    }
  });
}

/**
 * 降级的复制方法
 * @param {string} text - 要复制的文本
 * @param {Function} resolve - Promise resolve 函数
 * @param {Function} reject - Promise reject 函数
 */
function fallbackCopyToClipboard(text, resolve, reject) {
  try {
    // 创建临时文本区域
    const textArea = document.createElement("textarea");

    // 设置文本区域的样式使其不可见
    textArea.style.position = "fixed";
    textArea.style.top = "0";
    textArea.style.left = "0";
    textArea.style.width = "2em";
    textArea.style.height = "2em";
    textArea.style.padding = "0";
    textArea.style.border = "none";
    textArea.style.outline = "none";
    textArea.style.boxShadow = "none";
    textArea.style.background = "transparent";
    textArea.style.opacity = "0";

    // 设置文本内容
    textArea.value = text;

    // 添加到文档中
    document.body.appendChild(textArea);

    // 选择文本
    if (navigator.userAgent.match(/ipad|iphone/i)) {
      // iOS 设备特殊处理
      textArea.contentEditable = true;
      textArea.readOnly = false;

      const range = document.createRange();
      range.selectNodeContents(textArea);

      const selection = window.getSelection();
      selection.removeAllRanges();
      selection.addRange(range);
      textArea.setSelectionRange(0, 999999);
    } else {
      // 其他设备
      textArea.select();
    }

    // 执行复制命令
    const successful = document.execCommand("copy");

    // 清理
    document.body.removeChild(textArea);

    // 返回结果
    if (successful) {
      resolve(true);
    } else {
      reject(new Error("复制失败"));
    }
  } catch (err) {
    reject(err);
  }
}
