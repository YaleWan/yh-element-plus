import Tag from './src/index.vue'
import axios from 'axios'
axios.get('https://geo.datav.aliyun.com/areas_v3/bound/100000_full.json', {

}).then(response => {
  // 请求成功
  const res = response.data
  console.log(res)
}).catch(error => {
  // 请求失败，
  console.log(error)
})

Tag.install = (app) => {
  app.component(Tag.name, Tag)
}

export default Tag
