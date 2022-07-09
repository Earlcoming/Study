<script setup lang="ts">
import { ref } from 'vue'
// import Watch from './components/Watch.vue'
// import WatchEffect from './components/WatchEffect.vue'
import childFather from '@/components/childParent.vue'
import Conte n from '@/components/childParent.vue'

const onChange = () => {
  console.log('onchange');
}
const child = ref(null)
console.log('list', child);
const getList = () => {
  // 获取到子组件的值
  const newList = (child.value as any).toParent.push(222)
  console.log(child.value);
  console.log(newList, (child.value as any).list);
}

</script>
<template>
  <!-- <Watch /> -->
  <!-- <WatchEffect /> -->
  <childFather ref="child" @onChange="onChange" />
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
