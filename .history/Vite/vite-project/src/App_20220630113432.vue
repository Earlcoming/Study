<script setup lang="ts">
import { ref } from 'vue'
// import Watch from './components/Watch.vue'
// import WatchEffect from './components/WatchEffect.vue'
import childFather from './components/defineProps-TS.vue'

const onChange = () => {
  console.log('onchange');
}
const child = ref(null)
console.log('list', child);
const getList = () => {
  console.log(child);
}

</script>
<template>
  <!-- <Watch /> -->
  <!-- <WatchEffect /> -->
  <childFather ref="child" @onChange="onChange" :title="'测试标题'" :list="[1, 2, 2, 2, 2]" />
  <button @click="getList">获取</button>
</template>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
