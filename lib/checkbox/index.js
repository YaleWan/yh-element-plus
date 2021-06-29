import { useAttrs } from '../hooks';
import { resolveComponent, openBlock, createBlock, mergeProps, toHandlers, Fragment, renderList, createTextVNode, toDisplayString, withScopeId } from 'vue';

var script = {
  name: 'CCheckbox',
  mixins: [useAttrs],
  props: { }
};

const _withId = /*#__PURE__*/withScopeId("data-v-284d6f5f");

const render = /*#__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_el_checkbox = resolveComponent("el-checkbox");
  const _component_el_checkbox_group = resolveComponent("el-checkbox-group");

  return (openBlock(), createBlock(_component_el_checkbox_group, mergeProps({
    modelValue: _ctx.bindVal,
    "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (_ctx.bindVal = $event))
  }, _ctx.attrsAll, toHandlers(_ctx.on)), {
    default: _withId(() => [
      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option, idx) => {
        return (openBlock(), createBlock(_component_el_checkbox, {
          key: `${option.label}_${idx}`,
          label: option.value,
          disabled: option.disabled
        }, {
          default: _withId(() => [
            createTextVNode(toDisplayString(option.label), 1 /* TEXT */)
          ]),
          _: 2 /* DYNAMIC */
        }, 1032 /* PROPS, DYNAMIC_SLOTS */, ["label", "disabled"]))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    _: 1 /* STABLE */
  }, 16 /* FULL_PROPS */, ["modelValue"]))
});

script.render = render;
script.__scopeId = "data-v-284d6f5f";
script.__file = "packages/checkbox/src/index.vue";

script.install = (app) => {
  app.component(script.name, script);
};

export default script;
