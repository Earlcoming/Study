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
  return l(ocalStorage.getItem(key)
}

const piniaPlugin = (options: Options = { key: 'pinia' }) => {
  return (content: PiniaPluginContext) => {
    const { store } = content
    const data = getStorage(`${options?.key ?? __piniaKey} - ${store.$id}`)
    console.log(data, 'data ====== ')
    store.$subscribe(() => {
      setStorage(`${options?.key} - ${store.$id}`, toRaw(store.$state))
    })
    console.log(toRaw(store), '======')
    return {
      ...data
    }
  }
}

export default piniaPlugin