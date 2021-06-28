import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

const routes = [
  { path: '/changelog', component: () => import('../../CHANGELOG.md') }
]
importPages(require.context('../docs', true, /\.md$/, 'lazy'))
function importPages(r) {
  r.keys().forEach(key => {
    routes.push({ path: (key.split('.'))[1], component: () => r(key) })
  })
}
const router = new VueRouter({
  base: process.env.BASE_URL,
  routes
})

export default router
