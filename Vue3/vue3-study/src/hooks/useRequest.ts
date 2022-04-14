import { ref } from "vue";
import axios from "axios";

export default function useUrlLoader<T>(url: string) {
  // result => ref里面可填写null 和 泛型 T
  const result = ref<T | null>(null);
  const loading = ref(true);
  const errorMsg = ref(null);

  axios
    .get(url)
    .then((res) => {
      loading.value = false;
      result.value = res.data;
    })
    .catch((err) => {
      loading.value = false;
      errorMsg.value = err.message || "未知错误";
    });

  return {
    result,
    loading,
    errorMsg,
  };
}
