import { useAttrs } from '../el-hooks'
import { resolveComponent, openBlock, createBlock, mergeProps, toHandlers, Fragment, renderList, withScopeId } from 'vue'

var script = {
  name: 'CSelect',
  mixins: [useAttrs],
  props: { }
}

const _withId = /* #__PURE__*/withScopeId('data-v-7a22a850')

const render = /* #__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_el_option = resolveComponent('el-option')
  const _component_el_select = resolveComponent('el-select')

  return (openBlock(), createBlock(_component_el_select, mergeProps({
    modelValue: _ctx.bindVal,
    'onUpdate:modelValue': _cache[1] || (_cache[1] = $event => (_ctx.bindVal = $event))
  }, _ctx.attrsAll, toHandlers(_ctx.on)), {
    default: _withId(() => [
      (openBlock(true), createBlock(Fragment, null, renderList(_ctx.options, (option, idx) => {
        return (openBlock(), createBlock(_component_el_option, {
          key: `${option.value}_${idx}`,
          label: option.label,
          value: option.value,
          disabled: option.disabled
        }, null, 8 /* PROPS */, ['label', 'value', 'disabled']))
      }), 128 /* KEYED_FRAGMENT */))
    ]),
    _: 1 /* STABLE */
  }, 16 /* FULL_PROPS */, ['modelValue']))
})

script.render = render
script.__scopeId = 'data-v-7a22a850'
script.__file = 'packages/select/src/index.vue'

script.install = (app) => {
  app.component(script.name, script)
}

export default script
