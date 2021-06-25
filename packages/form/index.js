import Form from './src/index.vue'

Form.install = (app) => {
  app.component(Form.name, Form)
}

export default Form
