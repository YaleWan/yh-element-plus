import { resolveComponent, openBlock, createBlock, createVNode, withCtx, createTextVNode } from 'vue';

var script = {
    name:"CDrawer"
};

const _hoisted_1 = /*#__PURE__*/createTextVNode("123");

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_button = resolveComponent("el-button");

  return (openBlock(), createBlock("div", null, [
    createVNode(_component_el_button, { type: "primary" }, {
      default: withCtx(() => [
        _hoisted_1
      ]),
      _: 1 /* STABLE */
    })
  ]))
}

script.render = render;
script.__file = "packages/drawer/src/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

export default script;
