<template>
  <h2 v-if="loading">LOADING...</h2>
  <h2 v-else-if="errorMsg">{{ errorMsg }}</h2>
  <ul v-for="p in result" :key="p.id">
    <li>id: {{ p.id }}</li>
    <li>title: {{ p.title }}</li>
    <li>price: {{ p.price }}</li>
  </ul>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import useUrlLoader from "../hooks/useRequest";
export default defineComponent({
  props: {
    msg: String,
  },
  setup() {
    // const { x, y } = useMousePosition();
    // return { x, y };
    interface ProductResult {
      id: string;
      title: string;
      price: number;
    }

    /**
     * data 放在public文件夹里面
     */
    const { result, loading, errorMsg } = useUrlLoader<ProductResult[]>(
      "/data/products.json"
    );
    return {
      result,
      loading,
      errorMsg,
    };
  },
});
</script>
