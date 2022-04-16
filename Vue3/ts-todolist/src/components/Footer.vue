<template>
  <div class="footer">
    <div class="complete">
      <input type="checkbox" v-model="allCheck" />
      已完成
      <span>{{ count }}</span
      >个
    </div>
    <div class="clear" @click="clearCompleted">清除已完成</div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, watch, ref, computed } from 'vue'
import Todo from '@/hooks/Todo'
const props = defineProps({
  todos: {
    type: Array as () => Todo[],
    required: true
  },
  clearComp: {
    type: Function,
    required: true
  },
  checkAll: {
    type: Function,
    required: true
  }
})

const count = computed(() => {
  return props.todos.reduce((pre, cur) => pre + (cur.isCompleted ? 1 : 0), 0)
})

const clearCompleted = () => {
  props.clearComp()
}
const allCheck = ref(false)
watch(allCheck, (value) => {
  props.checkAll(value)
})
</script>
<style lang="scss" scropd>
.footer {
  display: flex;
  margin-top: 20px;
  justify-content: space-between;
  .clear {
    padding: 10px 20px;
    background-color: pink;
    border-radius: 4px;
    cursor: pointer;
  }
}
</style>
