<template>
  <div class="footer">
    <div class="complete">
      <input type="checkbox" v-model="allCheck" />
      已完成
      <span>{{ todoLength }}</span
      >个
    </div>
    <div class="clear" @click="clearCompleted">清除已完成</div>
  </div>
</template>
<script lang="ts" setup>
import { defineProps, computed } from "vue";
import ToDo from "@/components/Interface/toto";

const props = defineProps({
  todoLength: {
    type: Number,
    required: true,
  },
  todoList: {
    type: Array as () => ToDo[],
    required: true,
  },
  isallCheck: {
    type: Function,
    required: true,
  },
  clearAllCompleted: {
    type: Function,
    required: true,
  },
});

const clearCompleted = () => {
  props.clearAllCompleted();
};

const allCheck = computed({
  get() {
    // console.log(props.todoLength, props.todoList.length);
    if (props.todoLength === props.todoList.length && props.todoLength !== 0)
      return true;
    return false;
  },
  set(val) {
    props.isallCheck(val);
  },
});
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
