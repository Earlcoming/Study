<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { useText } from './store'
const text = useText()

// pinia,解构不具有响应式
const { current, name } = text;

console.log(text)

</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <p>原始值 {{ text.current }} --- {{ text.name }}</p>
  <p>结构值 {{ current }} --- {{ name }}</p>

<button @click="">change</button>
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
