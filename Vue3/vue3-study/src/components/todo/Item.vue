<template>
  <li>
    <div>
      <input type="checkbox" v-model="isComplete" />
      <span>{{ todo.name }}</span>
    </div>
    <button @click="deleteTodo(index)">删除</button>
  </li>
</template>
<script lang="ts" setup>
import { defineProps, computed } from "vue";
import ToDo from "@/components/Interface/toto";

const props = defineProps({
  todo: {
    type: Object as () => ToDo,
    required: true,
  },
  deleteTodo: {
    type: Function,
    required: true,
  },
  index: {
    type: Number,
    required: true,
  },
  updateProps: {
    type: Function,
    required: true,
  },
});

// 监测iscompleted数据变化
const isComplete = computed({
  get() {
    return props.todo.isComputed;
  },
  set(val) {
    props.updateProps(props.todo, val);
  },
});
</script>
<style lang="scss" scropd></style>
