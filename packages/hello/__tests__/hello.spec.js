import { mount } from '@vue/test-utils'
import Hello from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Hello.vue', () => {
  test('render test', () => {
    const wrapper = mount(Hello, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
