<script lang='ts' setup>
import { watchEffect, ref } from 'vue'

const msg = ref<string>('')
const msg1 = ref<string>('')

// 相当于添加了
const stop = watchEffect((oninvalidate) => {
  console.log(msg.value);
  // console.log(msg1.value);
  let ipt: HTMLInputElement = document.querySelector('#ipt') as HTMLInputElement
  console.log(ipt, 'ellllllllllllll');
  oninvalidate(() => {
    // console.log('可做一些回调操作，清除防抖');
    console.log('先执行这里的函数');
  })
}, {
  // flush 一般使用post
  // pre	sync	post
  // 组件更新前执行	强制效果始终同步触发	组件更新后执行
  flush: 'post' //dom加载之后，执行函数
})

// 停止监听
const stopWatch = () => stop()


</script>

<template>
  <input type="text" v-model="msg" id="ipt">
  <input type="text" v-model="msg1">
  <div>
    <button @click="stopWatch">停止监听</button>
  </div>
</template>

<style lang='scss' scoped>
</style>