<script setup lang="ts">
import { ref } from 'vue'
import { useText } from '../store'

defineProps<{ msg: string }>()



const text = useText()
const change = () => {
  // text.$patch((state) => {
  //   state.current = 200
  // })
  text.setCurrent()
}



</script>

<template>
  <h1>{{ msg }}</h1>
  <p>current {{ text.current }}</p>
  <p>name {{ text.name }}</p>
  <button @click="change">change</button>
</template>

<style scoped>
a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}
</style>
