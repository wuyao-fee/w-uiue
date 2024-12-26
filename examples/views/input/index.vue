<script>
export default {
  name: "InputExample",
  data() {
    return {
      input: "",
      password: "123456",
      textarea: "",
    };
  },
};
</script>

<template>
  <div class="w">
    <w-input v-model="input" placeholder="请输入input"></w-input>
    <w-input
      v-model="input"
      prefixIcon="plus"
      placeholder="请输入input"
    ></w-input>
    <w-input
      v-model="password"
      type="password"
      placeholder="请输入密码"
    ></w-input>
    <w-input
      v-model="textarea"
      type="textarea"
      placeholder="请输入textarea"
    ></w-input>
  </div>
</template>

<style lang="scss" scoped>
::v-deep .w-input {
  margin-bottom: 20px;
}
</style>
