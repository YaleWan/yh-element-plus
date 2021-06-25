## Input 输入框

通过鼠标或键盘输入字符

### 常规使用
> 常规使用跟el使用没有什么区别，只要记住一点就行了。所有的属性全部用attrs中即可，所有的方法用绑定在on即可。
> 
````html demo:vue
<template>
    <c-input v-model="value" :attrs="attrs" :on="on"/>
</template>
<script>
  export default {
    data() {
      return {
        value: "123",
        attrs: {
          placeholder: "请输入内容",
          clearable:true
        },
       on:{
           input:this.handleChange
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

### 动态变化
> 如果input中属性的某些值需要动态的变化，比如禁用状态，可以放到dynamicAttrs计算属性里。

````html demo:vue
<template>
  <c-input v-model="value" :attrs="attrs" :dynamicAttrs="dynamicAttrs" />
  <el-button @click="flag=!flag">禁用</el-button>
</template>
<script>
  export default {
    data() {
      return {
        value: "",
        flag: false,
        attrs: {
          placeholder: "请输入内容",
        },
      };
    },
  computed:{
      dynamicAttrs(){
          return {
            disabled: this.flag,
        }
      }
  }
};
</script>
````
### 输入长度限制
> 如果遇到那种`show-word-limit`这种kebab形式的属性。可以写成大驼峰的形式

````html demo:vue
<template>
  <c-input v-model="value" :attrs="attrs"/>
</template>
<script>
  export default {
    data() {
      return {
        value: "",
        flag: false,
        attrs: {
          placeholder: "请输入内容",
          type:"textarea",
          maxlength:"30",
          showWordLimit:true,
        },
      };
    }
};
</script>
````


### 属性

| 参数          | 说明            | 类型            | 可选值                 | 默认值   |
|-------------  |---------------- |---------------- |---------------------- |-------- |
| type         | 类型   | string  | text，textarea 和其他 [原生 input 的 type 值](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/input#Form_%3Cinput%3E_types) | text |
| value / v-model | 绑定值           | string / number  | — | — |
| maxlength     | 原生属性，最大输入长度      | number          |  —  | — |
| minlength     | 原生属性，最小输入长度      | number          | — | — |
| show-word-limit | 是否显示输入字数统计，只在 `type = "text"` 或 `type = "textarea"` 时有效 | boolean    |  —  | false |
| placeholder   | 输入框占位文本    | string          | — | — |
| clearable     | 是否可清空        | boolean         | — | false |
| show-password | 是否显示切换密码图标| boolean         | — | false |
| disabled      | 禁用            | boolean         | — | false   |
| size          | 输入框尺寸，只在 `type!="textarea"` 时有效      | string          | medium / small / mini  | — |
| prefix-icon   | 输入框头部图标    | string          | — | — |
| suffix-icon   | 输入框尾部图标    | string          | — | — |
| rows          | 输入框行数，只对 `type="textarea"` 有效  |  number | — |  2   |
| autosize      | 自适应内容高度，只对 `type="textarea"` 有效，可传入对象，如，{ minRows: 2, maxRows: 6 }  |  boolean / object | — |  false   |
| autocomplete | 原生属性，自动补全 | string | on, off | off |
| auto-complete | 下个主版本弃用 | string | on, off | off |
| name | 原生属性 | string | — | — |
| readonly | 原生属性，是否只读 | boolean | — | false |
| max | 原生属性，设置最大值 | — | — | — |
| min | 原生属性，设置最小值 | — | — | — |
| step | 原生属性，设置输入字段的合法数字间隔 | — | — | — |
| resize | 控制是否能被用户缩放 | string | none, both, horizontal, vertical | — |
| autofocus | 原生属性，自动获取焦点 | boolean | true, false | false |
| form | 原生属性 | string | — | — |
| label | 输入框关联的label文字 | string | — | — |
| tabindex | 输入框的tabindex | string | - | - |
| validate-event | 输入时是否触发表单的校验 | boolean | - | true |

### 事件
| 事件名称 | 说明 | 回调参数 |
|---------|--------|---------|
| blur | 在 Input 失去焦点时触发 | (event: Event) |
| focus | 在 Input 获得焦点时触发 | (event: Event) |
| change | 仅在输入框失去焦点或用户按下回车时触发 | (value: string \| number) |
| input | 在 Input 值改变时触发 | (value: string \| number) |
| clear | 在点击由 `clearable` 属性生成的清空按钮时触发 | — |

