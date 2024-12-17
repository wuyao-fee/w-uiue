import Vue from "vue";
import MessageVue from "./message.vue";

const MessageConstructor = Vue.extend(MessageVue);

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
  const instance = new MessageConstructor({
    data: options,
  });
  instance.$mount();
  document.body.appendChild(instance.$el);
  return instance;
};

["success", "warning", "info", "error", "help"].forEach((type) => {
  Message[type] = (options) => {
    return Message({
      type,
      message: options,
    });
  };
});

export default Message;
