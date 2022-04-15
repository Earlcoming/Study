<template>
  <div class="main">
    <ul>
      <Item
        v-for="(todo, index) in todoList.todos"
        :key="index"
        :todo="todo"
        :deleteTodo="deleteTodo"
        :index="index"
        :updateProps="updateProps"
      />
    </ul>
  </div>
</template>
<script lang="ts" setup>
import Item from "@/components/todo/Item.vue";
import { defineProps } from "vue";
const props = defineProps(["todoList", "deleteTodo", "updateProps"]);
console.log("main props", props);
</script>
<style lang="scss" scropd>
.main {
  border: 1px solid #ccc;
  border-radius: 4px;
  margin-top: 10px;
  ul {
    li {
      &:not(:last-child) {
        border-bottom: 1px solid #ccc;
      }
      &:hover {
        background-color: pink;
      }
      transition: all 0.5s;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 8px 20px;
      div {
        display: flex;
        align-items: center;
        input {
          margin-right: 10px;
        }
      }
    }
  }
}
</style>
