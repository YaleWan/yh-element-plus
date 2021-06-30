import Vue from 'vue'
import App from './App.vue'
import router from './router'
import DemoBlock from './components/demo-block' // import DemoBlock

import el from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'

import vueUi from 'c3-element-plus'
import '@c3-element-plus/theme-chalk/src/index.scss'

import 'github-markdown-css/github\-markdown.css'
import 'highlight.js/styles/color-brewer.css'
import 'vue-dotmd-loader/src/docs.css'

import './demo-styles/index.scss'

Vue.use(el).use(vueUi)
Vue.component('DemoBlock', DemoBlock)

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
