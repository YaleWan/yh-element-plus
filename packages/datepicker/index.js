import Datepicker from './src/index.vue'

Datepicker.install = (app) => {
  app.component(Datepicker.name, Datepicker)
}

export default Datepicker
