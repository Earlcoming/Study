<script lang='ts' setup>
import { reactive } from 'vue'
import A from './A.vue'
import B from './B.vue'
import C from './C.vue'

type Tabs = {
  name: string,
  com: any
}

const data = reactive<Tabs[]>([
  {
    name: '我是AAA',
    com() {
      return 'A'
    }
  },
   {
    name: '我是AAA',
    com() {
      return 'A'
    }
  },
   {
    name: '我是AAA',
    com() {
      return 'A'
    }
  }
])

</script>

<template>
  <div class=''>
  </div>
</template>

<style lang='scss' scoped>
</style>