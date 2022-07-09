<script lang='ts' setup>
import { inject, Ref } from 'vue';
let data = inject<Ref<string>>('flag')
const change = () => {
  data?.value
}
</script>

<template>
  <div class=''>
    我是B组件 {{ data }}
    <button @click="change">change</button>
  </div>
</template>

<style lang='scss' scoped>
</style>