<script setup lang="ts">
import { ref } from 'vue'
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Watch from './components/Watch.vue'
import WatchEffect from './components/WatchEffect.vue'
import childFather from './components/defineProps-TS.vue'

const onChange = () => {
  console.log('onchange');
}
const list = ref(null)
console.log('list', list);
const getList = () => {
console.log(9);
}

</script>
<template>
  <!-- <Watch /> -->
  <!-- <WatchEffect /> -->
  <childFather ref="list" @onChange="onChange" :title="'测试标题'" :list="[1, 2, 2, 2, 2]" />
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
