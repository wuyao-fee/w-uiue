<script>
import WInput from "../../input/src/input.vue";
import WSelectMenu from "./select-dropdown.vue";
export default {
  name: "WSelect",
  components: { WInput, WSelectMenu },
  props: {
    // 是否多选
    multiple: {
      type: Boolean,
      default: false,
    },
    // 多选时显示的标签数量
    multipleLimit: {
      type: Number,
      default: 0,
    },
  },
  data() {
    return {
      options: [],
      cachedOptions: [],
      createdLabel: null,
      createdSelected: false,
      selected: this.multiple ? [] : {},
      inputLength: 20,
      inputWidth: 0,
      initialInputHeight: 0,
      cachedPlaceHolder: "",
      optionsCount: 0,
      filteredOptionsCount: 0,
      visible: false,
      softFocus: false,
      selectedLabel: "",
      hoverIndex: -1,
      query: "",
      previousQuery: null,
      inputHovering: false,
      currentPlaceholder: "",
      menuVisibleOnFocus: false,
      isOnComposition: false,
      isSilentBlur: false,
    };
  },
  computed: {
    emptyText() {
      if (this.loading) {
        return this.loadingText || this.t("el.select.loading");
      } else {
        if (this.remote && this.query === "" && this.options.length === 0)
          return false;
        if (
          this.filterable &&
          this.query &&
          this.options.length > 0 &&
          this.filteredOptionsCount === 0
        ) {
          return this.noMatchText || this.t("el.select.noMatch");
        }
        if (this.options.length === 0) {
          return this.noDataText || this.t("el.select.noData");
        }
      }
      return null;
    },
  },
};
</script>

<template>
  <div class="w-select">
    <!-- 多选下拉框 -->
    <div class="el-select__tags" v-if="multiple"></div>

    <w-input ref="reference" type="text"></w-input>

    <transition name="w-zoom-in-top">
      <w-select-menu
        ref="popper"
        :append-to-body="popperAppendToBody"
        v-show="visible && emptyText !== false"
      ></w-select-menu>
    </transition>
  </div>
</template>

<style lang="scss" scoped>
@import "../../../packages/theme-chalk/src/common/common.scss";
</style>
