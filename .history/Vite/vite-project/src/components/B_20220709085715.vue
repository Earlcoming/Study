<script lang='ts' setup>
import { inject, Ref, ref } from 'vue';
let data = inject<Ref<string>>('flag', ref('aaa'))
const change = () => {
  data.value = 'fjdalf'
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