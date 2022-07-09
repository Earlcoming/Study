<script lang='ts' setup>
import { watchEffect, ref } from 'vue'

// const msg = ref<string>('')


const msg2 = ref({
  nav: {
    bar: {
      name: 124
    }
  }
})

// bug newVal和oldVal值一样
watch(msg2, (newVal, oldVal) => {
  console.log('新值', newVal);
  console.log('旧值', oldVal);
}, { deep: true, immediate: true })



</script>

<template>
  <!-- <input type="text" v-model="msg">
  <input type="text" v-model="msg1"> -->
  <input type="text" v-model="msg2.nav.bar.name">
</template>

<style lang='scss' scoped>
</style>