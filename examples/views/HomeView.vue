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
      <w-button
        type="primary"
        size="large"
        hasLoading
        icon="plus"
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
    <w-card style="margin: 20px"
      ><p style="text-align: justify; margin: 0">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quam,
        exercitationem molestiae, recusandae necessitatibus eligendi iure
        laudantium facere sunt unde sed ut perspiciatis voluptatibus omnis
        suscipit dolor ipsa, dolorem saepe.
      </p></w-card
    >
    <w-card title="文本标题" style="margin: 20px"
      ><p style="text-align: justify; margin: 0">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quam,
        exercitationem molestiae, recusandae necessitatibus eligendi iure
        laudantium facere sunt unde sed ut perspiciatis voluptatibus omnis
        suscipit dolor ipsa, dolorem saepe.
      </p></w-card
    >
    <w-card title="文本标题hover" shadow="hover" style="margin: 20px"
      ><p style="text-align: justify; margin: 0">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi quam,
        exercitationem molestiae, recusandae necessitatibus eligendi iure
        laudantium facere sunt unde sed ut perspiciatis voluptatibus omnis
        suscipit dolor ipsa, dolorem saepe.
      </p></w-card
    >
    <w-card
      title="小文本标题nover"
      subTitle="小副标题"
      shadow="nover"
      style="margin: 20px"
      ><p style="text-align: justify; margin: 0">
        中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本
        中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中
      </p></w-card
    >
    <w-card
      title="小文本标题nover"
      subTitle="小副标题"
      shadow="nover"
      style="margin: 20px"
    >
      <template #sub-title>时间：2024-12-05</template>
      <p style="text-align: justify; margin: 0">
        中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本
        中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中
      </p></w-card
    >
    <w-card
      title="大文本标题nover"
      size="large"
      shadow="nover"
      bottom="0"
      style="margin: 20px"
      ><p style="text-align: justify; margin: 0">
        中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本
        中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中中文测试文本中文测试文本中文测试文本中文测试文本中文测试文本中
      </p></w-card
    >
    <div class="white">
      <h1>descriptions 示例</h1>
      <w-descriptions
        title="用户信息"
        labelWidth="102px"
        labelAlign="right"
        ellipsis
        column="2"
      >
        <w-descriptions-item label="用户名"
          >kooriookamikooriookamikooriookamikooriookamikooriookamikooriookamikooriookamikooriookamikooriookami</w-descriptions-item
        >
        <w-descriptions-item label="手机号手机号手机号"
          >18100000000181000000001810000000018100000000181000000001810000000018100000000181000000001810000000018100000000</w-descriptions-item
        >
        <w-descriptions-item label="居住地居住地居"
          >苏州市苏州市苏州市苏州市苏州市苏州市苏州市苏州市苏州市苏州市苏州市苏州市苏州市苏州市苏州市苏州市</w-descriptions-item
        >
        <!-- <w-descriptions-item label="备注"> 学校 </w-descriptions-item> -->
        <!-- <w-descriptions-item label="联系地址详细名"
          >江苏省苏州市吴中区吴中大道 1188 号江苏省苏州市吴中区吴中大道 1188
          号江苏省苏州市吴中区吴中大道 1188 号江苏省苏州市吴中区吴中大道 1188
          号省苏州市吴中区吴中大道 1188</w-descriptions-item
        > -->
        <w-descriptions-item label="联系地址详细2" span="1"
          >江苏省苏州市吴中区吴中大道 1188 号江苏省苏州市吴中区吴中大道 1188
          号江苏省苏州市吴中区吴中大道 1188 号江苏省苏州市吴中区吴中大道 1188
          号省苏州市吴中区吴中大道 1188</w-descriptions-item
        >
        <w-descriptions-item label="联系地址详细名"
          >江苏省苏州市吴中区吴中大道 1188 号江苏省苏州市吴中区吴中大道 1188
          号江苏省苏州市吴中区吴中大道 1188 号江苏省苏州市吴中区吴中大道 1188
          号省苏州市吴中区吴中大道 1188苏省苏州市吴中区吴中大道 1188
          号江苏省苏州市吴中区吴中大道 1188 号省苏州市吴中区吴中大道
          1188</w-descriptions-item
        >
      </w-descriptions>
    </div>
    <div class="white">
      <w-descriptions title="用户信息">
        <w-descriptions-item label="用户名">kooriookami</w-descriptions-item>
        <w-descriptions-item label="手机号">18100000000</w-descriptions-item>
        <w-descriptions-item label="居住地">苏州市</w-descriptions-item>
        <w-descriptions-item label="备注">学校</w-descriptions-item>
        <w-descriptions-item label="联系地址"
          >江苏省苏州市吴中区吴中大道 1188 号</w-descriptions-item
        >
      </w-descriptions>
    </div>
    <div class="white">
      <w-descriptions title="用户信息" border>
        <w-descriptions-item label="用户名">kooriookami</w-descriptions-item>
        <w-descriptions-item label="手机号">18100000000</w-descriptions-item>
        <w-descriptions-item label="居住地">苏州市</w-descriptions-item>
        <w-descriptions-item label="备注">学校</w-descriptions-item>
        <w-descriptions-item label="联系地址"
          >江苏省苏州市吴中区吴中大道 1188 号</w-descriptions-item
        >
      </w-descriptions>
    </div>
    <div class="white">
      <h1>fontawesome图标示例</h1>
      <i class="fa-solid fa-house"></i>
      <w-icon name="home"></w-icon>
      <w-icon name="home" size="xl"></w-icon>
      <w-icon name="home" size="2x"></w-icon>
      <p>
        图标的使用方法16px
        <w-icon name="home"></w-icon>
      </p>
      <p style="font-size: 24px">
        图标的使用方法24px
        <w-icon name="home"></w-icon>
      </p>
      <p style="font-size: 24px">
        图标flip翻转
        <w-icon name="home" flip="horizontal"></w-icon>
        <w-icon name="home" flip="vertical"></w-icon>
        <w-icon name="home" flip="both"></w-icon>
      </p>
      <p style="font-size: 24px">
        图标rotate旋转
        <w-icon name="home" rotate="90"></w-icon>
        <w-icon name="home" rotate="180"></w-icon>
        <w-icon name="home" rotate="270"></w-icon>
        <w-icon name="home" rotate="45"></w-icon>
      </p>
      <p style="font-size: 24px">
        图标spin自动旋转
        <w-icon name="home" spin></w-icon>
        <w-icon name="home" pulse></w-icon>
        <w-icon name="home" rotate="270"></w-icon>
        <w-icon name="home" rotate="45"></w-icon>
      </p>
      <h1>message 示例</h1>
      <p style="display: flex">
        <w-button type="primary" @click="handleClick3('success')"
          >success</w-button
        >
        <w-button type="primary" @click="handleClick3('error')">error</w-button>
        <w-button type="primary" @click="handleClick3('warning')"
          >warning</w-button
        >
        <w-button type="primary" @click="handleClick3('info')">info</w-button>
        <w-button type="primary" @click="handleClick3('help')">help</w-button>
        <w-button type="primary" @click="handleClick4()">duration</w-button>
        <w-button type="primary" @click="handleClick5()">offset</w-button>
        <w-button type="primary" @click="handleClick6()"
          >onClose回调函数</w-button
        >
      </p>
      <h1>scrollbar 示例</h1>
      <w-scrollbar style="height: 200px">
        <ul>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
        </ul>
      </w-scrollbar>
      <hr />
      <br />
      <w-scrollbar color="#f40" width="10px" style="height: 200px">
        <ul>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
        </ul>
      </w-scrollbar>
      <hr />
      <br />
      <w-scrollbar color="#f40" style="width: 500px; height: 200px">
        <ul>
          <li>
            列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1
            列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1
            列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1
            列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1
            列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1
            列表项1列表项1列表项1列表项1列表项1列表项1列
          </li>
          <li>
            列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1
            列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1
            列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1
            列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1
            列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1
            列表项1列表项1列表项1列表项1列表项1列表项1列
          </li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
        </ul>
      </w-scrollbar>
      <hr />
      <br />
      <w-scrollbar color="#f40" style="height: 200px">
        <ul>
          <li style="width: 1800px">
            列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1
            列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1
            列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1
            列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1
            列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1列表项1
            列表项1列表项1列表项1列表项1列表项1列表项1列
          </li>
          <li>列表项1</li>
          <li>列表项1</li>
          <li>列表项1</li>
        </ul>
      </w-scrollbar>
    </div>
  </div>
</template>

<script>
export default {
  name: "HomeView",
  data() {
    return {
      loading: false,
      viewStyle: {
        backgroundColor: "red",
      },
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
    handleClick3(type) {
      if (type === "success") {
        this.$message.success("操作成功");
      }
      if (type === "error") {
        this.$message.error("操作失败");
      }
      if (type === "warning") {
        this.$message.warning("操作警告");
      }
      if (type === "info") {
        this.$message.info("操作信息");
      }
      if (type === "help") {
        this.$message.help("帮助信息");
      }
    },
    handleClick4() {
      this.$message({
        type: "info",
        message: "这是一条消息提示",
        duration: 0,
        showClose: true,
      });
    },
    handleClick5() {
      this.$message({
        type: "info",
        message: "这是一条消息提示",
        offset: 100,
      });
    },
    handleClick6() {
      this.$message({
        type: "info",
        message: "这是一条消息提示",
        duration: 0,
        showClose: true,
        onClose: () => {
          this.$message.success("关闭成功");
        },
      });
    },
  },
};
</script>

<style scoped>
.home {
  background-color: #f3f3f3;
  padding-bottom: 100px;
}
.icon-demo {
  margin: 20px;
}
.button-demo {
  display: flex;
  margin-bottom: 5px;
}
.white {
  background-color: #fff;
  margin: 30px 0;
  padding: 30px 20px;
}
ul,
li {
  list-style: none;
  padding: 0;
  margin: 0;
}
.w-scrollbar {
  border: 1px solid #000;
}
</style>
