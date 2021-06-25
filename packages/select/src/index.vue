<template>
  <el-select
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="on"
  >
    <el-option
      v-for="(option,idx) in options"
      :key="`${option.value}_${idx}`"
      :label="option.label"
      :value="option.value"
      :disabled="option.disabled"
    >
    </el-option>
  </el-select>
</template>
<script>
import { useAttrs } from "@c3-element-plus/hooks";
export default {
  name: 'CSelect',
  mixins:[useAttrs],
  props: { },
}
</script>
<style scoped>
</style>
