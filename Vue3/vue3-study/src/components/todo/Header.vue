<template>
  <div class="header">
    <input type="text" v-model="keyword" @keydown.enter="addList" />
  </div>
</template>
<script lang="ts" setup>
import { ref, defineProps } from "vue";

const keyword = ref("");

// 接受父级的穿的参数
const props = defineProps({
  addTodo: {
    type: Function,
    required: true,
  },
});

// 出发父级添加方法
const addList = () => {
  const todo = {
    id: new Date().getTime(),
    name: keyword.value,
    isComputed: false,
  };
  props.(todo);
  keyword.value = "";
};
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
