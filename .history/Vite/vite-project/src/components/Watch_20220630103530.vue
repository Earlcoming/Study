<script lang='ts' setup>
import { watch, ref } from 'vue'

const msg = ref<string>()
const msg1 = ref<string>()

watch(msg, (newVal, oldVal) => {
  console.log('新值', newVal);
  console.log('旧的值', oldVal);
})

</script>

<template>
  <input type="text" v-model="msg">
  <input type="text" v-model="msg1">
</template>

<style lang='scss' scoped>
</style>