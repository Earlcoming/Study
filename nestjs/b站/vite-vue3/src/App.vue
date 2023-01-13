<script setup lang="ts">
import { login, code } from './api/request'
import { ref } from 'vue'


const logins = async () => {
  const data = await login({
    username: 'earl',
    password: 123456
  });
  console.log('返回值', data)
}

const codeUrl = ref<string>()

const codes = async () => {
  const { data } = await code()
  // (codeUrl as any).value = data
  console.log('code 获取', data)
  codeUrl.value = data
  return data
}
// console.log('验证码', codes())
// const codeUrl = ref<string>(codes())
</script>

<template>
  <button @click="logins">登录</button>
  <button @click="codes">验证码</button>
  <div class="input">
    <input type="text" placeholder="验证码">
    <div>{{ codeUrl }}</div>
  </div>
</template>

<style scoped>

</style>
