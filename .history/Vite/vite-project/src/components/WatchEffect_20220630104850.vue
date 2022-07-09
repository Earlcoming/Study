<script lang='ts' setup>
import { watchEffect, ref } from 'vue'

const msg = ref<string>('')
const msg1 = ref<string>('')

// 相当于添加了
watchEffect((oninvalidate) => {
  console.log(msg.value);
  console.log(msg1.value);
})



</script>

<template>
  <input type="text" v-model="msg">
  <input type="text" v-model="msg1">
</template>

<style lang='scss' scoped>
</style>