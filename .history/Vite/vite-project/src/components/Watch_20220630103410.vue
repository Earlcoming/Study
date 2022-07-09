<script lang='ts' setup>
import { watch, ref } from 'vue'

const msg = ref

</script>

<template>
  <input type="text" v-model="msg">
  <input type="text" v-model="msg1">
</template>

<style lang='scss' scoped>
</style>