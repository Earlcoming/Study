<script lang='ts' setup>
type Props {
  content?: string
}
defineProps<Props>()
</script>

<template>
  <div class=''>
    {{ content }}
  </div>
</template>

<style lang='scss' scoped>
</style>