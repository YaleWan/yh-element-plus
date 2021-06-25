<template>
  <el-radio-group
    v-model="bindVal"
    v-bind="attrsAll"
    v-on="on"
  >
    <el-radio
      v-for="(option,idx) in options"
      :key="`${option.value}_${idx}`"
      :label="option.value"
      :disabled="option.disabled"
    >
      {{option.label}}
    </el-radio>
  </el-radio-group>
</template>
<script>
import { useAttrs } from "@c3-element-plus/hooks";
export default {
  name: 'CRadio',
  mixins:[useAttrs],
  props: { },
}
</script>
<style scoped>
</style>
