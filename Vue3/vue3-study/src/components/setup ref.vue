<template>
  <div class="hello">
    <h1>setup和ref的基本使用</h1>

    <!-- <h3>{{count}}</h3> -->
    <h2>姓名： {{ form.name }}</h2>
    <h2>年龄： {{ form.age }}</h2>
    <h2>
      媳妇： {{ form.wife.name }} {{ form.wife.age }} {{ form.wife.cars[0] }}
    </h2>
    <h2>职业： {{ form.value }}</h2>
    <h4>{{ form.sex }}</h4>
    <h4>msg{{ msg }}</h4>
    <button @click="updateCount">按钮</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, reactive } from "vue";
export default defineComponent({
  name: "HelloWorld",
  // setup执行时机，在beforeCreate之前执行(一次), 此时组件对象还没有创建
  props: {
    msg: String,
  },
  mounted() {
    // console.log("mouted", this);
  },

  setup(props, { attrs, emit, slots }) {
    /**
     * props: 包含props配置声明且传入了的所有属性的对象，父组件传入的所有的值，函数等
     * attrs: 包含没有在props配置中声明的属性的对象, 相当于 this.$attrs
     * slots: 包含所有传入的插槽内容的对象, 相当于 this.$slots
     * emit: 用来分发自定义事件的函数, 相当于 this.$emit
     */
    console.log("值", props, attrs, emit, slots);

    const count = ref(1);
    // ref定义一个函数，作用：响应式数据(基本类型数据)
    const state = {
      name: "小明",
      age: 10,
      sex: 18,
      value: "学生",
      wife: {
        name: "小甜甜",
        age: 18,
        cars: ["宝马", "奔驰", "奥迪"],
      },
    };
    const form = reactive<any>(state);

    const updateCount = () => {
      // console.log("数字+1", count)
      // count.value ++
      // form.name = '小红'
      // form.age ++
      // form.wife.age = 30
      // state.name = '阿狗'
      // // state.gender = '男'
      // state.age = 1111
      // console.log(state, form)
      form.age = 120;
      form.gender = "test";
      // delete state.sex
      console.log(form, state);
    };

    return {
      count,
      updateCount,
      form,
    };
  },
});
</script>
