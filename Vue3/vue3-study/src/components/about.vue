<template>
  <h2>关于我们</h2>
  <p>foo: {{ foo }}</p>
  <button @click="changeSon">按钮</button>
</template>
<script lang="ts" setup>
import { defineProps, defineEmits } from "vue";
const props = defineProps({
  foo: {
    type: String,
  },
});
const emit = defineEmits(["change"]);
const changeSon = () => {
  emit("change");
  console.log(props, "修改了foo字符串");
};
</script>
<style scropd></style>
