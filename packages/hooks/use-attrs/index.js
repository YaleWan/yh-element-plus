export default {
  props: {
    value: [Number, String, Array, Object, Boolean, Date], // 绑定值
    prop: String,
    attrs: Object,
    modifier: String, // v-model修饰符
    dynamicAttrs: Object, // 动态属性
    options: Array, // 多选项目
    on: { // 绑定事件
      type: Object,
      default() { return {} }
    }
  },
  computed: {
    bindVal: {
      get() {
        return this.formatVal(this.value)
      },
      set(val) {
        this.$emit('input', this.formatVal(val))
        this.$emit('update:value', this.formatVal(val))
      }
    },
    attrsAll() {
      return { ...this.$attrs, ...this.attrs, ...this.dynamicAttrs }
    }
  },
  methods: {
    formatVal(val) {
      if (this.modifier === 'number') {
        const n = parseFloat(val)
        return isNaN(n) ? val : n
      }
      if (this.modifier === 'trim' && val) return val.trim()
      return val
    }
  }
}
