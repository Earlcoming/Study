<template>
  {{ msg }}

  <h1>姓名</h1>
  <p>姓：<input type="text" v-model="name.first" /></p>
  <p>名：<input type="text" v-model="name.last" /></p>

  <p>姓名computed <input type="text" v-model="fullName" /></p>
  <p>姓名watch <input type="text" v-model="fullName1" /></p>
  <p>姓名watchEffect <input type="text" v-model="fullName2" /></p>
</template>

<script lang="ts">
import {
  defineComponent,
  ref,
  reactive,
  computed,
  watch,
  watchEffect,
} from "vue";
export default defineComponent({
  props: {
    msg: String,
  },
  setup(props, { attrs, emit, slots }) {
    const name = reactive({
      first: "东方",
      last: "不败",
    });

    /**
     * 监视 computed用法，监视指定的数据
     * 只传入一个箭头函数，则只读属性，也就是get(){}属性
     * 可以传入一个对象{ get() {}，set() {}}
     */

    /* const fullName = computed(() =>{
      return name.first + name.last
    }) */
    const fullName = computed({
      get() {
        console.log("get执行了");
        return name.first + "_" + name.last;
      },
      set(val: string) {
        let v = val.split("_");
        name.first = v[0];
        name.last = v[1];
      },
    });

    /**
     * watch
     * watchEffect
     */
    const fullName1 = ref("");
    watch(
      name,
      ({ first, last }) => {
        console.log(typeof name);
        fullName1.value = first + "_" + last;
      },
      // immediate 开启立马就执行一次，deep深度监控
      { immediate: true, deep: true }
    );

    /**
     * watch
     * watchEffect
     */
    const fullName2 = ref("");
    watchEffect(() => {
      fullName2.value = name.first + "_" + name.last;
    });

    return {
      name,
      fullName,
      fullName1,
      fullName2,
    };
  },
});
</script>
