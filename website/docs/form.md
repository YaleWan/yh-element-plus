## Form 表单

> c-form 是将所有的表单进行了一个整合，并且加上了一些响应式的处理
>


+ `formModel`
存放的是所有双向绑定的值
+ `formConfig`
form的配置
+ `formItemConfig`
formItem的配置
+ `layout`
布局配置
### 校验
> 所有表单的校验放在`formCofig`中`rules`配置中，实行三要素原则，即 `formModel`的数据、`formCofig`中`rules`配置和`formItemCofig`中prop一致
>
````html demo:vue
<template>
      <c-form
        :form-model="formModel"
        :form-config="formConfig"
        :options="optionsConfig"
        :form-item-config="formItemConfig"
        ref="form"
      >
      </c-form>
      <el-button @click="submit" type="primary">提交</el-button>
      <el-button @click="reset">重置</el-button>
</template>
<script>
  export default {
    data() {
      return {
      formModel: {
        activeName:"",
        activeArea: "",
        activeTime: [],
      },
      optionsConfig: {
        activeArea:[
          {label:"区域1",value:"1"},
          {label:"区域2",value:"2"},
        ]
      },

      formConfig:{
        ref:"form",
        labelWidth:"100px",
        size:"mini",
        class:"form",
        rules:{
          activeName:[
            { required: true, message: '请输入活动名称', trigger: 'blur' },
          ]
        },
      },
      formItemConfig: [
        {
          type: 'input',
          prop: 'activeName',
          formItem: { label: '活动名称' },
          attrs: {
            placeholder: '请输入活动名称',
            clearable: true
          }
        },
        {
          type: 'select',
          prop: 'activeArea',
          formItem: { label: '活动区域' },
          attrs: {
            placeholder: '请输入活动区域',
            clearable: true
          }
        },
        {
          type: 'datepicker',
          prop: 'activeTime',
          formItem: { label: '活动时间' },
          attrs: {
            type: 'daterange',
            startPlaceholder: '开始日期',
            endPlaceholder: '结束日期',
            format: 'yyyy-MM-dd',
            valueFormat: 'yyyy-MM-dd',
            clearable: true
          }
        }
      ],
      };
    },
    methods:{
        reset(){
          this.$refs.form.resetFields()
        },
        submit(){
          this.$refs.form.validate((valid) => {
          if (valid) {
            alert('submit!');
          } else {
            console.log('error submit!!');
            return false;
          }
        });
        }
    }
  };
</script>
````
