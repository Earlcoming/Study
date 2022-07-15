import { PiniaPluginContext } from "pinia"

type Options = {
  key?: string
}


const piniaPlugin = (options: Options = {'pinia'}) => {
  return (content: PiniaPluginContext) => {
    console.log(content)
  }
}

export default piniaPlugin