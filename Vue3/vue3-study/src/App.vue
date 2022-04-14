<template>
  <HelloWorld msg="msg"></HelloWorld>
  <!-- <button @click="handleClick">按钮</button> -->

  <about foo="我是个字符串" />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HelloWorld from "./components/HelloWorld.vue";
import about from "./components/about.vue";

export default defineComponent({
  name: "App",
  components: {
    HelloWorld,
    about,
  },
  // setup() {
  //   const flag = ref(true);
  //   const handleClick = function (): void {
  //     flag.value = !flag.value;
  //   };
  //   return {
  //     flag,
  //     handleClick,
  //   };
  // },
  setup() {
    // const change = () => {
    //   console.log("aaa");
    // };
    return;
  },
});
</script>
