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

// 保存pinia的值到storage，修改之后保存状态
const piniaPlugin = (options: Options = { key: 'pinia' }) => {
  return (content: PiniaPluginContext) => {
    const { store } = content
    const data = getStorage(`${options?.key ?? __piniaKey} - ${store.$id}`)
    // console.log(data, 'data======')
    store.$subscribe(() => {
      setStorage(`${options?.key}-${store.$id}`, toRaw(store.$state))
    })
    console.log(data, '======')
    return {
      ...data
    }
  }
}

export default piniaPlugin