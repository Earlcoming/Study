<script lang='ts' setup>
import B from '@/components/B.vue'
import { inject } from 'vue';
let data = inject('flag')
</script>

<template>
  <div class='A'>
    我是A组件
    <B />
  </div>
</template>

<style lang='scss' scoped>
</style>