<script lang='ts' setup>
import A from '@/components/A.vue'
import {ref, provide } from 'vue'

const flag = ref()
provide('flag', 'aaa')

</script>

<template>
  <div class='gen'>
    我是根组件
    <A />
  </div>
</template>

<style scoped>
.A {
  background-color: #f00;
}
</style>