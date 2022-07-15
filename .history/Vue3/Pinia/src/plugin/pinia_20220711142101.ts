import { PiniaPluginContext } from "pinia"

type Options = {
  key?: string
}


export const piniaPlugin = (options: Options) => {
  return (content: PiniaPluginContext) => {
    console.log(content)
  }
}
