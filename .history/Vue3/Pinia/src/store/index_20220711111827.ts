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
})