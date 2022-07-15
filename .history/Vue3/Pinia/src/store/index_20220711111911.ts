import { defineStore } from 'pinia'

enum Names {
  Test = 'TEST'
}

export const text = defineStore(Names.Test, {
  state: () => {
    return {
      current: 1,
      name: 'Earl'
    }
  },
  // 类似于computed 修饰作用
  getters: {

  },
  // methods 
  actions: {

  }
})