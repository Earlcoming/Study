
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

const toParent = reactive<number[]>([1, 2, 3, 4, 5])

watch(toParent, list => {
  console.log('子组件的', list);
})
// 抛给父组件
defineExpose({
  toParent
})
</script>

<template>
  参考地址： <a href="https://xiaoman.blog.csdn.net/article/details/122850170"
    target="_blank">https://xiaoman.blog.csdn.net/article/details/122850170</a>
  <div class=''>
    <p>title {{ title }}</p>
    <p>list {{ list }}</p>
  </div>

  <div v-for="(item) in 10" :key="item">
    <Card :content="`我是第${item}个`"></Card>
    <div>{{item.children.length}}</div>
  </div>

</template>

<style lang='scss' scoped>
</style>