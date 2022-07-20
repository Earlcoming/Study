import { defineStore } from 'pinia'
import { getApiList } from '@/server'

export const useStore = defineStore({
  id: 'counter',
  state: () => ({
    list: <any>{}
  }),
  actions: {
    async getList() {
      const result = await getApiList()
      this.list = result;
      // console.log(result)
    }
  }
})
