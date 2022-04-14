<template>
  自定义customRef<br />
  <input type="text" v-model="keyword" /><br />
  {{ keyword }}
  <button @click="changeMsg">改变msg</button>
</template>

<script lang="ts">
import { defineComponent, customRef } from "vue";
/**
 * 需求： 数字输入，间隔一段时间，下面的数字同步
 *
 * value: 类型不确定，所以使用泛型，delay是间隔时间
 */
function onDebounceRef<T>(value: T, delay = 300) {
  let timeOut: number;
  return customRef((track, trigger) => {
    return {
      get() {
        track();
        return value;
      },
      set(newValue: T) {
        clearTimeout(timeOut);
        timeOut = setTimeout(() => {
          value = newValue;
          trigger();
        }, delay);
      },
    };
  });
}
export default defineComponent({
  props: {
    msg: String,
  },
  setup() {
    const keyword = onDebounceRef<string>("abc");
    const changeMsg = () => {
      console.log("aaa");
    };
    return {
      keyword,
      changeMsg,
    };
  },
});
</script>
