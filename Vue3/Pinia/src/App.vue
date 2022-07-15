<script setup lang="ts">
// import HelloWorld from './components/HelloWorld.vue'
import { storeToRefs } from 'pinia';
import { useText } from './store'
const text = useText()

// pinia,解构不具有响应式
const { current, name } = storeToRefs(text);

// console.log(text)

const change = () => {
  text.current++
}

const reset = () => {
  text.$reset()
}


function isPalindrome(x: number): boolean {
  const n = parseInt(x.toString().split('').reverse().join(''));
  if (n === x) {
    return true
  }
  return false
};
console.log(isPalindrome(313));



function romanToInt(s: string): number {
  let count = 0;
  // 常规罗马
  const romanNum: any = {
    'I': 1,
    'V': 5,
    'X': 10,
    'L': 50,
    'C': 100,
    'D': 500,
    'M': 1000,
  }
  //特殊罗马字符
  const specish: any = {
    'IV': 4,
    'IX': 9,
    'XL': 40,
    'XC': 90,
    'CD': 400,
    'CM': 900
  }
  for (let key in specish) {
    if (s.includes(key)) {
      // console.log(key)
      count += specish[key]
      s = s.replace(key, '')
    }
  }
  // console.log(s, '=====')
  if (s.length > 0) {
    for (let rom of s) {
      count += romanNum[rom]
    }
  }
  return count
};

// console.log(romanToInt('CDIV'));


</script>

<template>
  <img alt="Vue logo" src="./assets/logo.png" />
  <!-- <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" /> -->
  <p>原始值 {{ text.current }} --- {{ text.name }}</p>
  <p>结构值 {{ current }} --- {{ name }}</p>

  <button @click="change">change</button>
  <button @click="reset">reset</button>
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
