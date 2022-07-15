import { PiniaPluginContext } from "pinia"

type Options = {
  key?: string
}


const piniaPlugin = (options: Options) => {
  return (content: PiniaPluginContext) => {
    console.log(content)
  }
}