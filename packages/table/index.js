import Table from './src/index.vue'

Table.install = (app) => {
  app.component(Table.name, Table)
}

export default Table
