<script lang='ts' setup>
import { watch, ref } from 'vue'

const msg = ref<string>()
const msg1 = ref<string>()

watch(msg, (new) =>{

})

</script>

<template>
  <input type="text" v-model="msg">
  <input type="text" v-model="msg1">
</template>

<style lang='scss' scoped>
</style>