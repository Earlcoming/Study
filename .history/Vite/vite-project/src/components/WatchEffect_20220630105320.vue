<script lang='ts' setup>
import { watchEffect, ref } from 'vue'

const msg = ref<string>('')
const msg1 = ref<string>('')

// 相当于添加了
const stop = watchEffect((oninvalidate) => {
  console.log(msg.value);
  console.log(msg1.value);

  oninvalidate(() => {
    console.log('可做一些回调操作，清除防抖');
    console.log('先执行这里的函数');
  })
}, {
  flush: 'post' //domg
})

// 停止监听
const stopWatch = () => {
  stop()
}


</script>

<template>
  <input type="text" v-model="msg">
  <input type="text" v-model="msg1">
  <div>
    <button @click="stopWatch">停止监听</button>
  </div>
</template>

<style lang='scss' scoped>
</style>