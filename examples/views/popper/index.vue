<script>
export default {
  name: "WPopperView",
  data() {
    return {
      tableData: [],
      tableColumns: {},
    };
  },
};
</script>

<template>
  <div class="w">
    <!-- <w-popper>弹出框默认弹出内容</w-popper> -->
    <w-popper
      trigger="clickToToggle"
      placement="bottom"
      content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabottom"
    >
      <w-button slot="reference">参考元素</w-button>
    </w-popper>
    <br />
    <w-popper
      trigger="clickToToggle"
      placement="top"
      content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaatop"
    >
      <w-button slot="reference">参考元素</w-button>
    </w-popper>
    <w-popper
      trigger="clickToToggle"
      placement="left"
      content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaleft"
    >
      <w-button slot="reference">参考元素</w-button>
    </w-popper>
    <w-popper
      trigger="clickToToggle"
      placement="right"
      content="aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaright"
    >
      <w-button slot="reference">参考元素</w-button>
    </w-popper>
    <w-popper trigger="clickToToggle" placement="bottom" width="800px">
      <w-descriptions
        title="用户信息"
        labelWidth="56px"
        labelAlign="right"
        ellipsis
      >
        <w-descriptions-item label="用户名">kooriookami</w-descriptions-item>
        <w-descriptions-item label="手机号">18100000000</w-descriptions-item>
        <w-descriptions-item label="居住地">苏州市</w-descriptions-item>
        <w-descriptions-item label="备注">学校</w-descriptions-item>
        <w-descriptions-item label="联系地址"
          >江苏省苏州市吴中区</w-descriptions-item
        >
      </w-descriptions>
      <w-button slot="reference">参考元素</w-button>
    </w-popper>
  </div>
</template>

<style lang="scss" scoped>
.w {
  width: 100%;
  height: 100vh;
  padding-left: 200px;
}
</style>
