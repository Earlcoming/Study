<script lang='ts' setup>
import { reactive, watch } from 'vue'
// 接受父组件传的值
type Prop = {
  title: string,
  list: any[]
}
defineProps<Prop>()
const emit = defineEmits(['onChange'])

const onBind = (event: string[]) => {
  emit('onChange', event)
}

const list = reactive<number[]>([1, 2, 3, 4, 5])

watch(list, )
// 抛给父组件
defineExpose({
  list
})
</script>

<template>
  <div class=''>
  </div>
</template>

<style lang='scss' scoped>
</style>