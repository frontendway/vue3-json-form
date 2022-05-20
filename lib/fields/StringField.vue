<template>
  <input
    type="text"
    :value="value"
    @input="hanleChange"
  >
</template>

<script lang="ts" setup>
import { FieldPropsDefine } from '../types'
import { defineProps } from 'vue'

const props = defineProps(FieldPropsDefine)
const hanleChange = (ev: any) => {
  props.onChange(ev.target.value)
}

</script>
