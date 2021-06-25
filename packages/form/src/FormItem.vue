<template>
  <el-form-item :prop="col.prop" v-bind="col.formItem" class="schema-form-item">
    <slot v-if="col.frontSlot" :name="col.frontSlot" />
    <component
      v-bind="col.attrs"
      :is="getComponentName(col.type)"
      :prop="col.prop"
      :value.sync="formModel[col.prop]"
      :modifier="col.modifier"
      :dynamic-attrs="col.dynamicAttrs"
      :on="col.on"
      :options="options[col.prop]"
    />
    <slot v-if="col.rearSlot" :name="col.rearSlot" />
  </el-form-item>
</template>

<script>
export default {
  name: 'FormItem',
  props: {
    formModel: {
      // 绑定的value值
      type: Object,
      default: () => {}
    },
    options: {
      // 多选值绑定的陪选项目
      type: Object,
      default: () => {}
    },
    col: {
      type: Object,
      default: () => {}

    }
  },
  data() {
    return {
      builtInNames: [
        'input',
        'select',
        'radio',
        'datepicker',
        'cascader',
        'placeholder',
        'checkbox',
        'slider',
        'timeselect',
        'timepicker',
        'jsoneditor',
        'quill',
        'codemirror',
        'rate',
        'switch',
        'colorpicker',
        'tags',
        'progress',
        'text'
      ]
    }
  },
  computed: {

  },
  methods: {
    // 组件名称
    getComponentName(type) {
      type = typeof type === 'function' ? type() : type

      if (this.builtInNames.includes(type)) {
        // 内置组件
        return 'C-' + type
      } else {
        // 外部组件
        return type
      }
    }
  }
}
</script>

<style lang="less" scoped>
.schema-form-item {
  .el-select {
    width: 100%;
  }
  .el-date-editor {
    width: 100%;
  }
  .el-cascader {
    width: 100%;
  }
  .el-date-editor.el-input {
    width: 100%;
  }
}
</style>
