<template>
  <div class="header">
    <input type="text" v-model="keyword" @keydown.enter="addList" />
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps } from 'vue'
const props = defineProps({
  addTodo: {
    type: Function,
    required: true
  }
})
const keyword = ref('')
const addList = () => {
  const todo = {
    id: new Date().getTime(),
    name: keyword.value,
    isCompuleted: false
  }
  if (!keyword.value) return
  props.addTodo(todo)
  keyword.value = ''
}
</script>
<style lang="scss" scropd>
.header {
  input {
    display: block;
    width: 100%;
    line-height: 35px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding-left: 20px;
  }
}
</style>
