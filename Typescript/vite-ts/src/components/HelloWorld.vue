<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ msg: string, mes: number }>()

const count = ref(0)

let u: Array<number> = [1]
let fuza: Array<{ mes: string }> = [{ mes: '111' }]
console.log(fuza)
console.log('=======================')

// 枚举
enum Color {
  red = 'aaa',
  green = 'asd',
  blue = 2,
  男 = 1
}
// let c: Color = Color.green

let mycolor: Color = Color.red
console.log(mycolor, Color.green, Color[1], Color[2])
console.log('=======================')


// any 数组中使用
let str: Array<any> = []
let an: any[] = []
console.log(str)
// void x
function show(): void {
  console.log('show')
}
console.log(show())
console.log('=======================')

// object 
function getObj(obj: object = { a: '111' }): object {
  console.log('获取obj');
  // return {
  //   name: '小米'
  // }
  // return undefined //object不能返回undefined
}
console.log(getObj())

// 联合
function getString(str: string | number): number {
  console.log('联合类型')
  // return str.toString().length
  if ((<string>str).length) {
    // return (<string>str).length
    return (str as string).length
  } else {
    return str.toString().length
  }
}
console.log(getString(111232));


console.log('=======================')



let timer = setInterval(() => {
  console.log('aaa')
}, 100000)
console.log(timer, typeof timer);


interface IPerson {
  // id是只读的属性
  readonly id: number
  name: string
  age: number
  // 可有可无sex
  sex?: string
  arr: Array<number>
  obj: object

}

const as = 11;
const person: IPerson = {
  id: 1,
  name: '小甜甜',
  age: 18,
  arr: [12, as],
  obj: {}
}
console.log(person)

console.log('=======================')

interface IPass {
  (sourse: string, subString: string): boolean
}

const search: IPass = function search(sourse, subString) {
  console.log(sourse, subString);
  return true
}
console.log(search('aaa', 'ddd'))

console.log('=======================')

interface IFly {
  fly(): void
}
class FPerson implements IFly {
  age: number
  constructor(age: number = 13) {
    this.age = age
    // this.fly()
  }
  fly() {
    console.log(`我${this.age}岁了，我会飞`)
  }
}

const fperson = new FPerson();
console.log()


class CPerson extends FPerson {
  name: string
  num: number
  constructor(age: number = 12, name: string = 'aaa', num: number = 100) {
    super(age)
    this.name = name
    this.num = num
    this.fly()
  }
  fly() {
    console.log(this.name, this.num)
    super.fly()
  }

}
const cperson = new CPerson(20, '小红', 120);



</script>

<template>
  <h1>{{ msg }}</h1>
  <h2>{{ mes }}</h2>

</template>

<style scoped>a {
  color: #42b983;
}

label {
  margin: 0 0.5em;
  font-weight: bold;
}

code {
  background-color: #eee;
  padding: 2px 4px;
  border-radius: 4px;
  color: #304455;
}</style>
