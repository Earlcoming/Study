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
    name: '我是BBB',
    com() {
      return 'B'
    }
  },
  {
    name: '我是CCC',
    com() {
      return 'C'
    }
  }
])

const current = reactive<Com>({
com
})

</script>

<template>
  <div class=''>
    <div v-for="item in data">
    </div>
    <component :is="current.comName"></component>

  </div>
</template>

<style lang='scss' scoped>
</style>