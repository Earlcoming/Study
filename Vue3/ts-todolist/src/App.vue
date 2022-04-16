<template>
  <div class="container">
    <Header :addTodo="addTodo" />
    <Main :todos="todoList.todos" :deleteTodo="deleteTodo" :isFlag="isFlag" />
    <Footer
      :todos="todoList.todos"
      :clearComp="clearComp"
      :checkAll="checkAll"
    />
  </div>
</template>

<script lang="ts" setup>
import { reactive, watch, onMounted } from 'vue'
import Header from './components/Header.vue'
import Main from './components/Main.vue'
import Footer from './components/Footer.vue'

import Todo from '@/hooks/Todo'
import { setStorage, getStorage } from '@/utils/localStorage'

const todoList = reactive<{ todos: Todo[] }>({
  todos: []
})

watch(
  () => todoList.todos,
  (value) => {
    console.log(value)
    setStorage(value, 'todos')
  },
  { deep: true }
)

onMounted(() => {
  todoList.todos = getStorage('todos')
})

// 添加todo
const addTodo = (todo: Todo) => {
  todoList.todos.unshift(todo)
}

// 删除todo
const deleteTodo = (index: number) => {
  todoList.todos.splice(index, 1)
}

// 修改todo的completed状态
const isFlag = (todo: Todo, isCompleted: boolean) => {
  todo.isCompleted = isCompleted
  console.log(todo)
}

// 全选全不选
const checkAll = (flag: boolean) => {
  todoList.todos.forEach((item) => (item.isCompleted = flag))
  console.log('checkall')
}

// 清理勾选已经完成的
const clearComp = () => {
  console.log('clearComp')
  todoList.todos = todoList.todos.filter((item) => !item.isCompleted)
  console.log(todoList.todos)
}

console.log(todoList)
</script>

<style lang="scss">
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
ul,
li {
  list-style: none;
}
a {
  text-decoration: none;
  color: #333;
}
body,
html {
  font-family: '微软雅黑';
  color: #333;
  font-size: 14px;
}
input:focus {
  outline: none;
}
.container {
  width: 800px;
  margin: 20px auto;
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 4px;
}
</style>
