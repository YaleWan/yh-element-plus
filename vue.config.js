module.exports = {
  pages: {
    index: {
      entry: 'website/index.js',
      template: 'website/public/index.html',
      filename: 'index.html'
    }
  },
  lintOnSave: false,
  chainWebpack: (config) => {
    config.resolve.alias.set('vue$', 'vue/dist/vue.esm.js')
    config.module
      .rule('dotmd')
      .test(/\.md$/)
      .use('vue-loader')
      .loader('vue-loader')
      .options({
        ...(config.module.rules
          .get('vue')
          .uses.get('vue-loader')
          .get('options') || null)
      })
      .end()
      .use('vue-dotmd-loader')
      .loader('vue-dotmd-loader')
      .options({
        dest: false,
        markdown: {
          options: {
            html: true
          }
        }
      })
      .end()
  }
}
