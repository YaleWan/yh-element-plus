<template>
  <div class="content">
    <el-header class="header" height="80px">
      <header-model />
    </el-header>
    <div class="container">
      <div class="page-component__nav">
        <side-nav :data="menus" />
      </div>
      <div class="page-main">
        <router-view />
      </div>
    </div>
  </div>
</template>

<script>
import HeaderModel from './components/header'
import SideNav from './components/side-nav'
import menus from './route.config.json'
export default {
  components: {
    HeaderModel,
    SideNav
  },
  data() {
    return {
      menus: menus,
      value1: ''

    }
  }
}
</script>
<style lang="less" scoped>
.content{
    max-width: 1200px;
    margin: 0 auto;
}
.el-header {
  border-bottom: 1px solid #dcdfe6;
}
.container {
  display: flex;
  height: calc(100vh - 100px);
  overflow: scroll;
  padding: 0 20px;
}
.page-component__nav {
  width: 200px;
  transition: padding-top 0.3s;
  overflow: scroll;
}
.page-main{
  margin-top: 10px;
  flex:1;
}
</style>
