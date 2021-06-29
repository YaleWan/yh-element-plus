<template>
  <el-form v-bind="formConfig" ref="form" :model="formModel">
    <div class="c-form">
      <el-row class="c-form__row" v-bind="rowLayout">
        <template v-for="(col, colIndex) in formatedSchema">
          <el-col v-bind="getColLayout(col)" :key="colIndex">
            <slot v-if="col.slot" :name="col.slot" />
            <template v-else>
              <!-- 具体组件的配置项目 -->
              <form-item
                v-bind="col.formItem"
                :prop="col.prop"
                :col="col"
                :form-model="formModel"
                :options="options"
                v-on="$listeners"
              />
            </template>
          </el-col>
        </template>
      </el-row>
    </div>
  </el-form>
</template>
<script>
import FormItem from './FormItem.vue'
export default {
  name: 'CForm',
  components: { FormItem },
  props: {
    layout: {
      // 关于el-row 的拓展
      type: Object,
      default: (value) => {
        console.log(`value`, value)
        return {
          rowLayout: {
            gutter: 0,
            justify: 'start'
          },
          colLayout: {
            xs: 24,
            sm: 12,
            md: 12,
            lg: 8,
            xl: 8
          }
        }
      }

    },
    formConfig: {
      type: Object,
      default: () => {}

    },
    formItemConfig: {
      // 表单的格局
      type: Array,
      default: () => []

    },
    formModel: {
      // 绑定的value值
      type: Object,
      default: () => {}

    },
    options: {
      // 多选值绑定的陪选项目
      type: Object,
      default: () => {}

    }
  },
  computed: {
    rowLayout() {
      return this.layout.rowLayout ? this.layout.rowLayout : this.layout
    },
    colLayout() {
      return this.layout.colLayout ? this.layout.colLayout : {}
    },
    formatedSchema() {
      const _schema = JSON.parse(JSON.stringify(this.formItemConfig))
      return _schema.filter(item => !this.isHide(item))
    }
  },
  methods: {
    isHide(item) {
      return typeof item.hide === 'function' ? item.hide() : item.hide
    },
    getColLayout(col) {
      return { ...col.colGrid, ...this.colLayout }
    },
    resetFields(...args) {
      return this.$refs.form.resetFields(...args)
    },
    validate(...args) {
      return this.$refs.form.validate(...args)
    }
  }
}
</script>
