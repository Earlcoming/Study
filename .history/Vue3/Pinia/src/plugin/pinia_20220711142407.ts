import { PiniaPluginContext } from "pinia"

type Options = {
  key?: string
}


const piniaPlugin = (options: Options = { key: 'pinia' }) => {
  return (content: PiniaPluginContext) => {
    const { stroe } = content
    console.log(content, '======')
  }
}

export default piniaPlugin