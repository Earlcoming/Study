## 学习笔记

### 数组

```typescript
// 第一种
let list: number[] = [1, 2, 3];

// 第二种
let list: Array<number> = [1, 2, 3];
```

### setup

```ts

import {defineComponent, ref, reactive} from 'vue'

setup(props, context){
  // props是父组件传给子组件的数据
  props:{
    msg: String
  }
  
  // context
  /**
   * 
   * 
   */ 
  
  // ref响应式基本类型数据, count是一个rel对象
  // 操作数据xxx.value
  const count = ref(0)

  // reactive 定义多个数据的响应式，比如对象，数组,data是一个proxy对象
  const data = reactive({
    name: '小明',
    age: 20,
    sex: '男',
    wife: {
      name: '小甜甜',
      age: 21,
      has: ['宝马','玛莎拉蒂','奥迪']
    }

  })
  
  handle() {
    console.log('handle')
  }
  return {
    count,
    handle,
    data
  }
}
```
