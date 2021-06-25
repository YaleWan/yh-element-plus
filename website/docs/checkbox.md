## Checkbox多选框


### 常规使用
> 常规使用跟el使用没有什么区别，只要记住一点就行了。所有的属性全部用attrs中即可，所有的方法用绑定在on即可。
> 
````html demo:vue
<template>
    <c-checkbox v-model="value" :attrs="attrs" :on="on" :options="options"/>
</template>
<script>
  export default {
    data() {
      return {
        value: [],
        options:[
            {label:"复选框A",value:"A"},
            {label:"复选框B",value:"B",disabled:true},
            {label:"复选框C",value:"C"},
        ],
        attrs: {
          placeholder: "请输入内容",
          clearable:true
        },
       on:{
           change:this.handleChange
       }
        
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



### Checkbox 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | string / number / boolean | — | — |
| label     | 选中状态的值（只有在`checkbox-group`或者绑定对象类型为`array`时有效）| string / number / boolean  |       —        |     —    |
| disabled  | 是否禁用    | boolean   |  — | false   |

### Checkbox-group 属性
| 参数      | 说明    | 类型      | 可选值       | 默认值   |
|---------- |-------- |---------- |-------------  |-------- |
| value / v-model | 绑定值 | array | — | — |
| size     | 多选框组尺寸，仅对按钮形式的 Checkbox 或带有边框的 Checkbox 有效   | string  | medium / small / mini  |    —     |
| disabled  | 是否禁用    | boolean   | — | false   |
| min     | 可被勾选的 checkbox 的最小数量   | number    |       —        |     —    |
| max     | 可被勾选的 checkbox 的最大数量   | number    |       —        |     —    |
| text-color  | 按钮形式的 Checkbox 激活时的文本颜色    | string   | — | #ffffff   |
| fill  | 按钮形式的 Checkbox 激活时的填充色和边框色    | string   | — | #409EFF   |

### Checkbox-group 事件
| 事件名称      | 说明    | 回调参数      |
|---------- |-------- |---------- |
| change  | 当绑定值变化时触发的事件 | 更新后的值 |