<script lang='ts' setup>
import { reactive, markRaw, sh } from 'vue'
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
      return B
    }
  },
  {
    name: '我是CCC',
    com() {
      return C
    }
  }
])

const current = reactive<Com>({
  com: data[1].com()
})

</script>

<template>
  <div class=''>
    <div v-for="item in data">
    </div>
    <component :is="current.com"></component>

  </div>
</template>

<style lang='scss' scoped>
</style>