import { useAttrs } from '../el-hooks'
import { resolveComponent, openBlock, createBlock, mergeProps, toHandlers } from 'vue'

var script = {
  name: 'CInput',
  mixins: [useAttrs],
  props: {}
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_el_input = resolveComponent('el-input')

  return (openBlock(), createBlock(_component_el_input, mergeProps({
    modelValue: _ctx.bindVal,
    'onUpdate:modelValue': _cache[1] || (_cache[1] = $event => (_ctx.bindVal = $event))
  }, _ctx.attrsAll, toHandlers(_ctx.on)), null, 16 /* FULL_PROPS */, ['modelValue']))
}

script.render = render
script.__file = 'packages/input/src/index.vue'

script.install = (app) => {
  app.component(script.name, script)
}

export default script
