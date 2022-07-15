import { PiniaPluginContext } from "pinia"

type Options = {
  key?: string
}


const piniaPlugin = (options: Options = { key: 'pinia' }) => {
  return (content: PiniaPluginContext) => {
    const { store } = content
    store.$state
    console.log(store, '======')
  }
}

export default piniaPlugin