<template>
  <div class="home">
    <h1>Button 示例</h1>
    <div class="button-demo">
      <w-button>默认按钮-中</w-button>
      <w-button type="primary">主要按钮-中</w-button>
      <w-button type="dashed">虚线按钮-中</w-button>
      <w-button type="text">文本按钮-中</w-button>
    </div>
    <div class="button-demo">
      <w-button disabled>默认按钮</w-button>
      <w-button type="primary" disabled>主要按钮</w-button>
      <w-button type="dashed" disabled>虚线按钮</w-button>
      <w-button type="text" disabled>文本按钮</w-button>
    </div>
    <div class="button-demo">
      <w-button size="small">默认按钮-小</w-button>
      <w-button type="primary" size="small">主要按钮-小</w-button>
      <w-button type="dashed" size="small">虚线按钮-小</w-button>
      <w-button type="text" size="small">文本按钮-小</w-button>
    </div>
    <div class="button-demo">
      <w-button size="large">默认按钮-大</w-button>
      <w-button type="primary" size="large">主要按钮-大</w-button>
      <w-button type="dashed" size="large">虚线按钮-大</w-button>
      <w-button type="text" size="large">文本按钮-大</w-button>
    </div>
    <div class="button-demo">
      <w-button type="primary" :loading="loading" @click="handleClick"
        >主要按钮-中</w-button
      >
      <w-button
        type="primary"
        hasLoading
        icon="line-plus"
        iconStroke
        @click="handleClick2"
        >主要按钮-中</w-button
      >
      <w-button
        type="primary"
        size="small"
        hasLoading
        icon="line-delete"
        @click="handleClick2"
        >主要按钮-中</w-button
      >
      <w-button
        type="primary"
        size="large"
        hasLoading
        icon="line-plus"
        iconStroke
        @click="handleClick2"
        >主要按钮-中</w-button
      >
    </div>
    <h1>SVG Icon 示例</h1>
    <div class="icon-demo">
      <w-svg-icon name="line-add" color="#f40" :size="24" />
      <w-svg-icon name="line-add-user" color="#f40" :size="24" />
      <w-svg-icon name="line-plus" stroke color="#f40" :size="24" />
      <w-svg-icon name="line-user" color="#f40" :size="24" />
      <w-svg-icon name="line-me" color="#f40" :size="24" />
    </div>
    <h1>Divider 示例</h1>
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
      <w-divider></w-divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
    </div>
    <div style="display: flex">
      <p style="width: 100px">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
      <w-divider direction="vertical">文本</w-divider>
      <w-divider
        direction="vertical"
        type="dashed"
        orientation="left"
        margin="24"
        >left文本</w-divider
      >
      <w-divider direction="vertical" type="dotted" orientation="right"
        >right文本</w-divider
      >
      <p style="width: 100px">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
    </div>
    <div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
      <w-divider orientation="left" type="dashed">文本</w-divider>
      <w-divider orientation="center" margin="30">文本</w-divider>
      <w-divider orientation="right" type="dotted">文本</w-divider>
      <w-divider orientation="center" type="dashed">文本</w-divider>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugiat quis
        nam laboriosam quidem officia, dolorum atque expedita consequatur nulla
        excepturi delectus nihil incidunt fugit, illum, quia voluptatibus vitae
        debitis doloribus?
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      loading: false,
    };
  },
  methods: {
    handleClick() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
      }, 2000);
    },
    async handleClick2() {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve();
        }, 2000);
      });
    },
  },
};
</script>

<style scoped>
.icon-demo {
  margin: 20px;
}
.button-demo {
  display: flex;
  margin-bottom: 5px;
}
</style>
