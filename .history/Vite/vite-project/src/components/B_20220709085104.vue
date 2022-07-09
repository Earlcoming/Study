<script lang='ts' setup>
import { inject } from 'vue';
let data = inject('flag')
</script>

<template>
  <div class=''>
    我是B组件 {{ data }}
    <button @click="change">change</button>
  </div>
</template>

<style lang='scss' scoped>
</style>