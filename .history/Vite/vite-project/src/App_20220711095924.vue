<script lang='ts' setup>

const flag = ref<boolean>(false)
</script>

<template>
  <!-- <div class='gen'>
    我是根组件
    <A />
  </div> -->
  <button @click="flag = !flag">修改</button>
  {{ $filters.format('我是测试的') }}
  {{ $filters.format('我是测试的') }}
</template>

<style scoped>
.A {
  background-color: #f00;
}
</style>