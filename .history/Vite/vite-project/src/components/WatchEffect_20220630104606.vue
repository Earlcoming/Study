<script lang='ts' setup>
import { watchEffect, ref } from 'vue'

const msg = ref<string>('')
const msg1 = ref<string>('')

// bug newVal和oldVal值一样
watchEffect(() => {

})



</script>

<template>
  <!-- <input type="text" v-model="msg">
  <input type="text" v-model="msg1"> -->
  <input type="text" v-model="msg2.nav.bar.name">
</template>

<style lang='scss' scoped>
</style>