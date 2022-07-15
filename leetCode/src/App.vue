<script setup lang="ts">
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://vuejs.org/api/sfc-script-setup.html#script-setup
import HelloWorld from './components/HelloWorld.vue'
console.log('abc'.charAt(1))

function longestCommonPrefix(strs: string[]): string {
  if (!strs.length || strs.length === 0) return '';
  let str = '', i = 0;
  while (strs[0][i]) {
    for (let s of strs) {
      if (s[i] !== strs[0][i]) {
        return str
      }
    }
    str += strs[0][i]
    i++
  }

  return str
};
// console.log(longestCommonPrefix(["reafd","adsa","decfdas"]),'=====')


function isValid(s: string): boolean {
  if (!s.length) return false;
  const stauck: string[] = []
  const map = {
    ')': '(',
    ']': '[',
    '}': '{'
  }
  for (let i = 0; i < s.length; i++) {
    const item = s[i]
    if (map[item]) {
      stauck.unshift(map[item])
    } else {
      if (stauck[0] === item) {
        stauck.shift()
      } else {
        return false
      }
    }
  }
  console.log(map)
  return stauck.length === 0;

};
console.log(isValid('()[]{}'))
// console.log('()[]{}'.includes('{]'), '===')
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <HelloWorld msg="Vite + Vue" />
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
