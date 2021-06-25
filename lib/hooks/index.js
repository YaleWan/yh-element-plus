var index$1 = {
    props: {
      value: [Number, String, Array, Object, Boolean, Date], // 绑定值
      prop: String,
      modifier: String,
      dynamicAttrs: Object,
      options: Array,
    },
    computed: {
      bindVal: {
        get() {
          return this.formatVal(this.value);
        },
        set(val) {
          this.$emit("update:value", this.formatVal(val));
        }
      },
      attrsAll() {
        return { ...this.$attrs, ...this.dynamicAttrs };
      }
    },
    methods: {
      formatVal(val) {
        if (this.modifier === "number") {
          let n = parseFloat(val);
          return isNaN(n) ? val : n;
        }
        if (this.modifier === "trim" && val) return val.trim();
        return val;
      }
    }
  };

var index = {
    props: {
      value: [Number, String, Array, Object, Boolean, Date], // 绑定值
      prop: String,
      modifier: String,
      dynamicAttrs: Object,
      options: Array,
    },
    methods: {
      formatVal(val) {
        if (this.modifier === "number") {
          let n = parseFloat(val);
          return isNaN(n) ? val : n;
        }
        if (this.modifier === "trim" && val) return val.trim();
        return val;
      }
    }
  };

export { index$1 as useAttrs, index as useEvents };
