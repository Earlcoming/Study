<script lang='ts' setup>
import { watch, ref } from 'vue'

// const msg = ref<string>('')
// const msg1 = ref<string>('')
// watch(msg, (newVal, oldVal) => {
//   console.log('新值', newVal);
//   console.log('旧值', oldVal);
// })
// watch([msg, msg1], (newVal, oldVal) => {
//   console.log('新值', newVal);
//   console.log('旧值', oldVal);
// })



const msg2 = ref({
  nav: {
    bar: {
      name: 124
    }
  }
})







</script>

<template>
  <input type="text" v-model="msg">
  <input type="text" v-model="msg1">
  <input type="text" v-model="msg2.nav.bar.name">
</template>

<style lang='scss' scoped>
</style>