import { useAttrs } from '../el-hooks'
import { resolveComponent, openBlock, createBlock, mergeProps, toHandlers, withScopeId } from 'vue'

var script = {
  name: 'CDatepicker',
  mixins: [useAttrs],
  props: { }
}

const _withId = /* #__PURE__*/withScopeId('data-v-46f06e98')

const render = /* #__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  const _component_el_date_picker = resolveComponent('el-date-picker')

  return (openBlock(), createBlock(_component_el_date_picker, mergeProps({
    modelValue: _ctx.bindVal,
    'onUpdate:modelValue': _cache[1] || (_cache[1] = $event => (_ctx.bindVal = $event))
  }, _ctx.attrsAll, toHandlers(_ctx.on)), null, 16 /* FULL_PROPS */, ['modelValue']))
})

script.render = render
script.__scopeId = 'data-v-46f06e98'
script.__file = 'packages/datepicker/src/index.vue'

script.install = (app) => {
  app.component(script.name, script)
}

export default script
