<script lang='ts' setup>
import { reactive, markRaw, shallowRef } from 'vue'
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'

type Tabs = {
  name: string,
  com: any
}

type Com = Pick<Tabs, 'com'>
const data = reactive<Tabs[]>([
  {
    name: '我是AAA',
    com() {
      return markRaw(A)
    }
  },
  {
    name: '我是BBB',
    com() {
      return shallowRef(B)
    }
  },
  {
    name: '我是CCC',
    com() {
      return shallowRef(C)
    }
  }
])

const current = reactive<Com>({
  com: data[1].com()
})

const changeItem = (index: number) => {
  console.log(index, );
}

</script>

<template>
  <div class=''>

    <h1>动态组件</h1>

    参考地址：<a href="https://xiaoman.blog.csdn.net/article/details/122891279"
      target="_blank">https://xiaoman.blog.csdn.net/article/details/122891279</a>
    <div v-for="(item, index) in data" :key="item.name" @click="changeItem(index)">{{ item.name }}</div>
    <component :is="current.com"></component>
  </div>
</template>

<style lang='scss' scoped>
</style>