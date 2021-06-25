import { mount } from '@vue/test-utils'
import Datepicker from '../src/index.vue'

const AXIOM = 'Rem is the best girl'

describe('Datepicker.vue', () => {
  test('render test', () => {
    const wrapper = mount(Datepicker, {
      slots: {
        default: AXIOM,
      },
    })
    expect(wrapper.text()).toEqual(AXIOM)
  })
})
