import { PiniaPluginContext } from "pinia"
import { toRaw } from 'vue'

type Options = {
  key?: string
}


const setStorage = (key: string, val: any) => {
  localStorage.setItem(key, JSON.stringify(val))
}

const piniaPlugin = (options: Options = { key: 'pinia' }) => {
  return (content: PiniaPluginContext) => {
    const { store } = content
    setStorage(`${options?.key} + ${store.$id}`, toRaw(store.$state))
    console.log(toRaw(store.$state), '======')
  }
}

export default piniaPlugin