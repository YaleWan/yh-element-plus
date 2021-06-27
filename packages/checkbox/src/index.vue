<template>
  <el-checkbox-group
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="on"
  >
    <el-checkbox
      v-for="(option,idx) in options"
      :key="`${option.label}_${idx}`"
      :label="option.value"
      :disabled="option.disabled"
    >{{ option.label }}</el-checkbox>
  </el-checkbox-group>
</template>
<script>
import { useAttrs } from '@c3-element-plus/hooks'
export default {
  name: 'CCheckbox',
  mixins: [useAttrs],
  props: { }
}
</script>
<style scoped>
</style>
