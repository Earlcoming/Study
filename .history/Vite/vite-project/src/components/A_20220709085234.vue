<script lang='ts' setup>
import B from '@/components/B.vue'
import { inject, Ref } from 'vue';
let data = inject<Ref<>>('flag')
</script>

<template>
  <div class='A'>
    我是A组件 {{ data }}
    <B />
  </div>
</template>

<style lang='scss' scoped>
</style>