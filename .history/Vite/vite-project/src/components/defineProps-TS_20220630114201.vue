<script lang='ts' setup>
import { reactive, watch } from 'vue'
// 接受父组件传的值
type Prop = {
  title?: string,
  list?: any[]
}


// 设置父组件的默认值
withDefaults(defineProps<Prop>(), {
  title: '我是默认值',
  list: () => [6, 6, 6]
})

const emit = defineEmits(['onChange'])

const onBind = (event: string[]) => {
  emit('onChange', event)
}

const list = reactive<number[]>([1, 2, 3, 4, 5])

watch(list, list => {
  console.log('子组件的', list);
})
// 抛给父组件
defineExpose({
  list
})
</script>

<template>
  <div class=''>
    <p>title {{title}}</p>
    <p></p>
  </div>
</template>

<style lang='scss' scoped>
</style>