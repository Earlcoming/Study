<template>
  <HelloWorld msg="测试的值"></HelloWorld>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
  },
});
</script>
