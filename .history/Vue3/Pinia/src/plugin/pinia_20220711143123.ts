import { PiniaPluginContext } from "pinia"
import { toRaw } from 'vue'

type Options = {
  key?: string
}


const setStorage = (key: string, val: any) => {
  localStorage.setItem(key, JSON.stringify(val))
}

const getStorage = (key: string) => {
  return localStorage.getItem(key)
}

const piniaPlugin = (options: Options = { key: 'pinia' }) => {
  return (content: PiniaPluginContext) => {
    const { store } = content
    const data = getStorage(`${options?.key ?? } + ${store.$id}`)
    console.log(data, 'data ====== ')
    store.$subscribe(() => {
      setStorage(`${options?.key} + ${store.$id}`, toRaw(store.$state))
    })
    console.log(toRaw(store), '======')
    return {
      ...data
    }
  }
}

export default piniaPlugin