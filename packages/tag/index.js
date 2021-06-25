import Tag from './src/index.vue'

Tag.install = (app) => {
  app.component(Tag.name, Tag)
}

export default Tag
