import { pushScopeId, popScopeId, openBlock, createBlock, renderSlot, withScopeId, createTextVNode } from 'vue'

var script = {
  name: 'CTag',
  props: { }
}

const _withId = /* #__PURE__*/withScopeId('data-v-afa57bc4')

pushScopeId('data-v-afa57bc4')
const _hoisted_1 = /* #__PURE__*/createTextVNode(' 123 ')
popScopeId()

const render = /* #__PURE__*/_withId((_ctx, _cache, $props, $setup, $data, $options) => {
  return (openBlock(), createBlock('div', null, [
    _hoisted_1,
    renderSlot(_ctx.$slots, 'default')
  ]))
})

script.render = render
script.__scopeId = 'data-v-afa57bc4'
script.__file = 'packages/tag/src/index.vue'

script.install = (app) => {
  app.component(script.name, script)
}

export default script
