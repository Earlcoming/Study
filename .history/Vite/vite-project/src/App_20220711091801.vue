<script lang='ts' setup>

const flag = ref<boolean>(false)
</script>

<template>
  <!-- <div class='gen'>
    我是根组件
    <A />
  </div> -->
  <button @click="flag = !flag"></button>
</template>

<style scoped>
.A {
  background-color: #f00;
}
</style>