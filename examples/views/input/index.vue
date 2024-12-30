<script>
export default {
  name: "InputExample",
  data() {
    return {
      input: "123",
      password: "123456",
      textarea: "1235",
    };
  },
};
</script>

<template>
  <div class="w">
    <w-input
      v-model="input"
      placeholder="请输入input"
      show-word-limit
      maxlength="10"
    ></w-input>
    <w-input
      v-model="input"
      clearable
      prefixIcon="plus"
      suffixIcon="plus"
      placeholder="请输入input"
    ></w-input>
    <w-input v-model="input" clearable placeholder="请输入input"></w-input>
    <w-input
      v-model="password"
      type="password"
      showPassword
      placeholder="请输入密码"
    ></w-input>
    <w-input
      v-model="textarea"
      type="textarea"
      placeholder="请输入textarea"
      show-word-limit
      rows="3"
      maxlength="300"
    ></w-input>
    <w-input v-model="input" placeholder="请输入内容" clearable></w-input>
  </div>
</template>

<style lang="scss" scoped>
::v-deep .w-input {
  margin-bottom: 20px;
}
</style>
