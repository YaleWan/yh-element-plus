<template>
  <el-input
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="on"
  />
</template>
<script>
import { useAttrs } from '@c3-element-plus/hooks'
export default {
  name: 'CInput',
  mixins: [useAttrs],
  props: {}
}
</script>
<style>
.abc{
  bottom: 1px;
}
</style>
