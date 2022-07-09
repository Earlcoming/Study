<script lang='ts' setup>
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
</script>

<template>
  <div class=''>
  </div>
</template>

<style lang='scss' scoped>
</style>