import Vue from "vue";
import MessageVue from "./message.vue";
import { isObject } from "../../theme-chalk/src/utils/types.js";

const MessageConstructor = Vue.extend(MessageVue);

let instance;
let instanceList = [];

const Message = (options) => {
  if (Vue.prototype.$isServer) {
    return;
  }
  options = options || {};
  if (typeof options === "string") {
    options = {
      message: options,
    };
  }
  const userOnClose = options.onClose;
  const id = `message_${new Date().getTime()}`;
  options.onClose = () => {
    Message.close(id, userOnClose);
  };
  instance = new MessageConstructor({
    data: options,
  });
  instance.id = id;
  instance.$mount();
  document.body.appendChild(instance.$el);
  const verticalOffset = options.offset || 20;
  instance.verticalOffset = verticalOffset;
  instance.visible = true;
  instanceList.push(instance);
  return instance;
};

["success", "warning", "info", "error", "help"].forEach((type) => {
  Message[type] = (options) => {
    if (isObject(options)) {
      return Message({
        type,
        ...options,
      });
    }
    return Message({
      type,
      message: options,
    });
  };
});

Message.close = (id, userOnClose) => {
  const instance = instanceList.find((item) => item.id === id);
  if (instance && typeof userOnClose === "function") {
    userOnClose(instance);
    instanceList = instanceList.filter((item) => item.id !== id);
  }
};

export default Message;
