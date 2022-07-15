import { defineStore } from 'pinia'

enum Names {
  Test = 'TEST'
}

export const useText = defineStore(Names.Test, {
  state: () => {
    return {
      current: 1,
      name: 'Earl'
    }
  },
  // 类似于computed 修饰作用
  getters: {

  },
  // methods 可以同步
  actions: {
    setCurrent(num: number = 999) {
      this.current = num
    }
  }
})