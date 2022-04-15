<template>
  <div class="container">
    <Header :addTodo="addTodo" />
    <Main
      :todoList="todoList"
      :deleteTodo="deleteTodo"
      :updateProps="updateProps"
    />
    <Footer
      :todoLength="todoLength"
      :todoList="todoList.todos"
      :isallCheck="isallCheck"
      :clearAllCompleted="clearAllCompleted"
    />
  </div>
</template>

<script lang="ts" setup>
import Header from "./components/todo/Header.vue";
import Main from "./components/todo/Main.vue";
import Footer from "./components/todo/Footer.vue";

import ToDo from "@/components/Interface/toto";
import { getStorage, setStorage } from "@/utils/localStorage";
import { reactive, computed, watch, onMounted } from "vue";

// 默认数据传入到provide,便于子组件调用
const todoList = reactive<{ todos: ToDo[] }>({
  todos: [],
});

// 监测数据并保存到浏览器缓存
watch(
  () => todoList.todos,
  (value) => {
    setStorage(value, "token_todos");
  },
  { deep: true }
);

onMounted(() => {
  // todoList = reactive({
  //   todos: getStorage("token_todos")
  // })
  todoList.todos = getStorage("token_todos");
  console.log("onmounted", todoList.todos);
});

//计算选中数量
const todoLength = computed(() => {
  return todoList.todos.reduce((pre, cur) => {
    return pre + (cur.isComputed ? 1 : 0);
  }, 0);
});

// 添加todo
const addTodo = (todo: ToDo) => {
  todoList.todos.unshift(todo);
};

// 删除数据
const deleteTodo = (index: number) => {
  todoList.todos.splice(index, 1);
};

// 更新数据
const updateProps = (todo: ToDo, val: boolean) => {
  todo.isComputed = val;
};

// 全选/全不选
const isallCheck = (isCompleted: boolean) => {
  todoList.todos.forEach((item) => (item.isComputed = isCompleted));
};

// 清理选中数据
const clearAllCompleted = () => {
  todoList.todos = todoList.todos.filter((item) => !item.isComputed);
};
</script>
<style lang="scss" scropd>
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
  font-family: "微软雅黑";
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
