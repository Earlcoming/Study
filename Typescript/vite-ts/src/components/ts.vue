<script lang='ts' setup>import { YieldExpression } from '@babel/types';


class Animal {
  name: string
  constructor(name: string = 'ani') {
    this.name = name
  }
  run(dis: number = 120) {
    console.log(`${this.name}跑了${dis}米这么远的距离`)
  }
}

class Dog extends Animal {
  constructor(name: string = '小狗') {
    super(name)
  }
  run() {
    super.run(10)
  }
}

class Pig extends Animal {
  constructor(name: string = '小猪') {
    super(name)
  }
  run() {
    super.run(100)
  }
  ear() {
    console.log('小猪喜欢吃')
  }
}
const dog: Dog = new Dog('小狗');
const ani: Animal = new Animal('动物')
const pig: Pig = new Pig()

dog.run()
ani.run()
pig.ear()
console.log('===================')


// public 任何位置都能访问
class Person {
  // public name: string
  // readonly name: string = "测试" //初始值
  public constructor(readonly name: string = '大蛇丸', public age: number) {
    this.name = name
    this.age = age
  }
  public eat(): boolean {
    console.log(`${this.name}真好吃`)
    return true
  }
}

const dsw = new Person('鸣人', 10)

console.log(dsw.name, dsw.eat(), dsw)

console.log('===================')
class Oerson {
  // firstName: string = '小甜甜'
  // lastName: string = '大蛇丸'
  static oldName: string = '测试'
  constructor(public firstName: string = '小甜甜', public lastName: string = '大蛇丸') {
    this.firstName = firstName
    this.lastName = lastName
  }
  get fullName() {
    console.log('get中...')
    return this.firstName + this.lastName
  }
  // get lastname() {
  //     return this.lastName
  // }
  set fullName(val: string) {
    console.log('set中...', val)
    this.firstName = val
    this.lastName = val[1]
  }

}

const oerson: Oerson = new Oerson()

oerson.fullName = '第一'
console.log('oerson', oerson.fullName)
console.log(Oerson.oldName)

console.log('===================')

// 抽象类
abstract class Bind {
  // 抽象方法
  abstract eat(): void

  cry(): void {
    console.log('哭，使劲哭')
  }

  // eat() {
  //     console.log('坐着吃')
  // }
}

class Cat extends Bind {
  eat() {
    console.log('舔着吃, 真好吃')
  }
}
const cat: Cat = new Cat();
cat.eat()

console.log('===================')



const add: (x?: number, y?: number) => number = function (x: number = 10, y: number = 20): number {
  return x + y
}
console.log(add());
console.log('===================')


function getF(x: string, y: string, ...args: string[]) {
  return x + y + [...args].join('')
}
console.log(getF('1', '2', 'ccc', 'ddd'))
console.log('===================')

function sun(x: string, y: number): number {
  return parseInt(x) + y;
}
console.log(sun('10a', 2))

interface Api {
  readonly id: number
  name: string
  age: number
  sex?: string
}

const obj: Api = {
  id: 111,
  name: '小甜甜',
  age: 18,
}
console.log(obj)
console.log('===================')


function getArr(num: number = 123, count: number = 3, result?: string): number {
  return num + count + Number(result)
}

console.log(getArr(1, 2, '111'))
console.log(123);

function get<T>(val: T, cont: number): T[] {
  const newArr: Array<T> = []
  for (let i = 0; i < cont; i++) {
    newArr.push(val)
  }
  return newArr
}

console.log(get<string>('aaa', 2))
console.log('===================')

//
//
//
//
interface Ibace<T> {
  data: Array<T>
  add: (t: T) => T
  // getId: (id: number) => T
}

class User {
  id?: number
  name: string
  age: number
  constructor(name: string, age: number) {
    this.name = name
    this.age = age
  }
}
class Usid implements Ibace<User> {
  data: User[] = []
  // 添加用户信息
  add(user: User): User {
    user = { ...user, id: Date.now() + Math.floor(Math.random() * 999) }
    this.data.push(user)
    console.log('保存user', user)
    return user
  }
  // 根据id筛选用户信息
  // getId(id: number): User {
  //   return this.data.find(user => user.id === id);
  // }


}
const usid = new Usid()
// usid.getId(12)
usid.add(new User('小红', 12))

// usid.getId(20)
usid.add(new User('狗子', 20))



</script>
<template>
  <h1>测试ts</h1>
</template>