<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
// import Watch from './components/Watch.vue'
import WatchEffect from './components/WatchEffect.vue'
import defineApi from './components/defineProps-TS.vue'
</script>
<template>
  <!-- <Watch /> -->
  <WatchEffect />
  <defineApi @onChange="onChange" />
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
