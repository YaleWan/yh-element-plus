<template>
  <el-date-picker
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="on"
  >
  </el-date-picker>
</template>
<script>
import { useAttrs } from "@c3-element-plus/hooks";
export default {
  name: 'CDatepicker',
  mixins:[useAttrs],
  props: { },
}
</script>
<style scoped>
</style>
