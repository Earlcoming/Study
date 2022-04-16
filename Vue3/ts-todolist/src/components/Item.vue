<template>
  <li>
    <div>
      <input type="checkbox" v-model="isComplete" />
      <span>{{ todo.name }}</span>
    </div>
    <button @click="deleteTodos">删除</button>
  </li>
</template>
<script lang="ts" setup>
import { defineProps, computed } from 'vue'
import Todo from '@/hooks/Todo'
const props = defineProps({
  todo: {
    type: Object as () => Todo, // 返回的对象是一个Todo接口泛型的对象
    required: true,
    default: () => {
      return {}
    }
  },
  deleteTodo: {
    type: Function,
    required: true
  },
  index: {
    type: Number
  },
  isFlag: {
    type: Function,
    required: true
  }
})

// 计算属性
const isComplete = computed({
  get () {
    return props.todo.isCompleted
  },
  set (value) {
    props.isFlag(props.todo, value)
  }
})

// 删除todo
const deleteTodos = () => {
  props.deleteTodo(props.index)
}

console.log()
</script>
