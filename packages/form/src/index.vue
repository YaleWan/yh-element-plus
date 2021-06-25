<template>
  <div class="common-form">
    <el-row class="common-form__row" v-bind="rowLayout">
      <template v-for="(col, colIndex) in formatedSchema">
        <el-col v-bind="getColLayout(col)" :key="colIndex">
          <slot v-if="col.slot" :name="col.slot"></slot>
          <template v-else>
            <!-- 具体组件的配置项目 -->
            <form-item
              v-bind="col.formItem"
              :prop="col.prop"
              :col="col"
              :formModel="formModel"
              :options="options"
              v-on="$listeners"
            >
            </form-item>
          </template>
        </el-col>
      </template>
    </el-row>
  </div>
</template>
<script>
import FormItem from "./FormItem.vue";
export default {
  name: "CForm",
  components: { FormItem },
  props: {
    layout: {
      // 关于el-row 的拓展
      type: Object,
      default() {
        return {};
      },
    },
    formConfig: {
      // 表单的格局
      type: Array,
      required: true,
    },
    formModel: {
      // 绑定的value值
      type: Object,
      required: true,
      default() {
        return {};
      },
    },
    options: {
      // 多选值绑定的陪选项目
      type: Object,
      default() {
        return {};
      },
    },
  },
  computed: {
    rowLayout() {
      return this.layout.rowLayout ? this.layout.rowLayout : this.layout;
    },
    colLayout() {
      return this.layout.colLayout ? this.layout.colLayout : {};
    },
    formatedSchema() {
        let _schema = JSON.parse(JSON.stringify(this.formConfig)) 
        return _schema.filter((item) => !this.isHide(item));
    },
  },
  methods: {
    isHide(item) {
      return typeof item.hide === "function" ? item.hide() : item.hide;
    },
    getColLayout(col) {
      return { ...col.colGrid, ...this.colLayout };
    },
  },
};
</script>
<style scoped></style>
