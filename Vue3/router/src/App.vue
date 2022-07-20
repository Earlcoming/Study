<script lang='ts' setup>
import 'animate.css'

import { useRouter } from 'vue-router'
const router = useRouter();

const RePath = (name: string) => {
  //不留历史痕迹
  router.replace({ name })
}
</script>

<template>
  <div class=''>
    小满最骚
  </div>
  <router-link replace :to="{ name: 'Login' }">Login</router-link>
  <router-link replace :to="{ name: 'Reg' }">reg</router-link>
  <button @click="RePath('Login')">login</button>
  <button @click="RePath('Reg')">reg</button>
  <button></button>
  <router-view #default="{ route, Component }">
    <transition :enter-active-class="`animate__animated ${route.meta.transition as string}`">
      <component :is="Component"></component>
    </transition>
  </router-view>
  <!-- <router-view></router-view> -->
</template>

<style lang='scss' scoped>
</style>