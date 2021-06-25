````html demo:vue
<template>
      <c-form
        :form-model="formModel"
        :form-config="formConfig"
        :options="optionsConfig"
        :form-item-config="formItemConfig"
        :layout="layout"
      >
      </c-form>
      <el-button>提交</el-button>
</template>
<script>
  export default {
    data() {
      return {
    formModel: {
        date: [],
        time: [],
        account_name: '',
        account_start_date: '',
        account_end_date: '',
        created_start_at: '',
        created_end_at: ''
      },
      optionsConfig: {

      },

      formConfig:{
         ref:"form",
        labelWidth:"100px",
        size:"mini",
        class:"form",
        rules:{
        account_name:[
          { required: true, message: '请输入活动名称', trigger: 'blur' },
        ]
      },
      },
      formItemConfig: [
        {
          type: 'input',
          prop: 'account_name',
          formItem: { label: '对方户名' },
          colGrid: { span: 8 },
          attrs: {
            placeholder: '请输入对方户名',
            clearable: true
          }
        }
      ],
      layout: {
        rowLayout: {
          gutter: 30,
          justify: 'start'
        },
        colLayout: {
          xs: 24,
          sm: 12,
          md: 12,
          lg: 8,
          xl: 8
        }
      },

      };
    },
    methods:{
        handleChange(val){
            console.log(val)
        }
    }
  };
</script>
````
