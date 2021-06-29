import { resolveComponent, openBlock, createBlock, mergeProps, withCtx, renderSlot, createCommentVNode, resolveDynamicComponent, createVNode, Fragment, renderList, toHandlers } from 'vue';

var script$1 = {
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
      type = typeof type === 'function' ? type() : type;

      if (this.builtInNames.includes(type)) {
        // 内置组件
        return 'C-' + type
      } else {
        // 外部组件
        return type
      }
    }
  }
};

function render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_form_item = resolveComponent("el-form-item");

  return (openBlock(), createBlock(_component_el_form_item, mergeProps({
    prop: $props.col.prop
  }, $props.col.formItem, { class: "schema-form-item" }), {
    default: withCtx(() => [
      ($props.col.frontSlot)
        ? renderSlot(_ctx.$slots, $props.col.frontSlot, { key: 0 })
        : createCommentVNode("v-if", true),
      (openBlock(), createBlock(resolveDynamicComponent($options.getComponentName($props.col.type)), mergeProps($props.col.attrs, {
        prop: $props.col.prop,
        value: $props.formModel[$props.col.prop],
        modifier: $props.col.modifier,
        "dynamic-attrs": $props.col.dynamicAttrs,
        on: $props.col.on,
        options: $props.options[$props.col.prop]
      }), null, 16 /* FULL_PROPS */, ["prop", "value", "modifier", "dynamic-attrs", "on", "options"])),
      ($props.col.rearSlot)
        ? renderSlot(_ctx.$slots, $props.col.rearSlot, { key: 1 })
        : createCommentVNode("v-if", true)
    ]),
    _: 3 /* FORWARDED */
  }, 16 /* FULL_PROPS */, ["prop"]))
}

script$1.render = render$1;
script$1.__file = "packages/form/src/FormItem.vue";

var script = {
  name: 'CForm',
  components: { FormItem: script$1 },
  props: {
    layout: {
      // 关于el-row 的拓展
      type: Object,
      default: () => {
        return {
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
      const _schema = JSON.parse(JSON.stringify(this.formItemConfig));
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
};

const _hoisted_1 = { class: "c-form" };

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_form_item = resolveComponent("form-item");
  const _component_el_col = resolveComponent("el-col");
  const _component_el_row = resolveComponent("el-row");
  const _component_el_form = resolveComponent("el-form");

  return (openBlock(), createBlock(_component_el_form, mergeProps($props.formConfig, {
    ref: "form",
    model: $props.formModel
  }), {
    default: withCtx(() => [
      createVNode("div", _hoisted_1, [
        createVNode(_component_el_row, mergeProps({ class: "c-form__row" }, $options.rowLayout), {
          default: withCtx(() => [
            (openBlock(true), createBlock(Fragment, null, renderList($options.formatedSchema, (col, colIndex) => {
              return (openBlock(), createBlock("div", { key: colIndex }, [
                createVNode(_component_el_col, $options.getColLayout(col), {
                  default: withCtx(() => [
                    (col.slot)
                      ? renderSlot(_ctx.$slots, col.slot, { key: 0 })
                      : (openBlock(), createBlock(Fragment, { key: 1 }, [
                          createCommentVNode(" 具体组件的配置项目 "),
                          createVNode(_component_form_item, mergeProps(col.formItem, {
                            prop: col.prop,
                            col: col,
                            "form-model": $props.formModel,
                            options: $props.options
                          }, toHandlers(_ctx.$listeners)), null, 16 /* FULL_PROPS */, ["prop", "col", "form-model", "options"])
                        ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                  ]),
                  _: 2 /* DYNAMIC */
                }, 1040 /* FULL_PROPS, DYNAMIC_SLOTS */)
              ]))
            }), 128 /* KEYED_FRAGMENT */))
          ]),
          _: 1 /* STABLE */
        }, 16 /* FULL_PROPS */)
      ])
    ]),
    _: 1 /* STABLE */
  }, 16 /* FULL_PROPS */, ["model"]))
}

script.render = render;
script.__file = "packages/form/src/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

export default script;
