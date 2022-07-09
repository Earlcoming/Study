<script lang='ts' setup>
import A from '@/components/A.vue'
import { provide } from 'vue'

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