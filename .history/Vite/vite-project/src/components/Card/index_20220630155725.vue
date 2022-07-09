<script setup lang='ts'>
type Props = {
  content?: string
}
defineProps<Props>()
</script>

<template>
  <div class=''>
    {{ content }} {{ content }}
  </div>
</template>

<style lang='scss' scoped>
</style>