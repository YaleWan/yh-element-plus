````html demo:vue
<template>
    <el-form
      ref="form"
      label-width="100px"
      :model="formModel"
      size="mini"
      class="form"
    >
      <c-form
        :form-model="formModel"
        :options="optionsConfig"
        :form-config="formConfig"
        :layout="layout"
      >
      </c-form>
    </el-form>
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
      formConfig: [
        {
          type: 'datepicker',
          prop: 'date',
          formItem: { label: '到账日期' },
          colGrid: { span: 8 },
          attrs: {
            type: 'daterange',
            startPlaceholder: '开始日期',
            endPlaceholder: '结束日期',
            format: 'yyyy-MM-dd',
            valueFormat: 'yyyy-MM-dd',
            clearable: true
          }
        },
        {
          type: 'datepicker',
          prop: 'time',
          formItem: { label: '导入时间' },
          colGrid: { span: 8 },
          attrs: {
            type: 'datetimerange',
            startPlaceholder: '开始时间',
            endPlaceholder: '结束时间',
            format: 'yyyy-MM-dd HH:mm:ss',
            valueFormat: 'yyyy-MM-dd HH:mm:ss',
            clearable: true
          }
        },
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
