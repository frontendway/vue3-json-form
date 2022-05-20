<template>
  <input
    type="number"
    :value="value"
    @input="hanleChange"
  >
</template>

<script lang="ts" setup>
import { FieldPropsDefine } from '../types'
import { defineProps } from 'vue'

const props = defineProps(FieldPropsDefine)
const hanleChange = (ev: any) => {
  const num = +ev.target.value
  if (!Number.isNaN(num)) props.onChange(num)
}

</script>
