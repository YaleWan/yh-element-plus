import CCheckbox from '@c3-element-plus/checkbox'
import CInput from '@c3-element-plus/input'
import CRadio from '@c3-element-plus/radio'
import CSelect from '@c3-element-plus/select'
import CTag from '@c3-element-plus/tag'
import CDatepicker from '@c3-element-plus/datepicker'
import CForm from '@c3-element-plus/form'

const install = (app, opt) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

const components = [CCheckbox, CInput, CDatepicker, CRadio, CSelect, CTag, CForm]

export { CCheckbox, CRadio, CInput, CDatepicker, CSelect, CTag, CForm, install }

export default {
  install
}
