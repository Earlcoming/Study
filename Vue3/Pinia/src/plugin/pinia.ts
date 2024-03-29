import { PiniaPluginContext } from "pinia"
import { toRaw } from 'vue'

const __piniaKey = '__PINIAKEY__'

type Options = {
  key?: string
}

const setStorage = (key: string, val: any): void => {
  localStorage.setItem(key, JSON.stringify(val))
}

const getStorage = (key: string) => {
  return (localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {})
}

// 保存pinia的值到storage，修改之后保存状态到storage里面
const piniaPlugin = (options?: Options) => {
  return (content: PiniaPluginContext) => {
    const { store } = content
    store.$subscribe(() => {
      setStorage(`${options?.key ?? __piniaKey}${store.$id}`, toRaw(store.$state))
    })
    const data = getStorage(`${options?.key ?? __piniaKey}${store.$id}`)
    // console.log(data, 'data======')
    return {
      ...data
    }
  }
}

export default piniaPlugin