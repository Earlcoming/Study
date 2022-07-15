import { PiniaPluginContext } from "pinia"
import { toRaw } from 'vue'

type Options = {
  key?: string
}




const piniaPlugin = (options: Options = { key: 'pinia' }) => {
  return (content: PiniaPluginContext) => {
    const { store } = content

    console.log(toRaw(store.$state), '======')
  }
}

export default piniaPlugin