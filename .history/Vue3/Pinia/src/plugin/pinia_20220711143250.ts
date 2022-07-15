import { PiniaPluginContext } from "pinia"
import { toRaw } from 'vue'
const __piniaKey = '__PINIAKEY__'
//定义兜底变量


type Options = {
  key?: string
}
//定义入参类型



//将数据存在本地
const setStorage = (key: string, value: any): void => {

  localStorage.setItem(key, JSON.stringify(value))

}


//存缓存中读取
const getStorage = (key: string) => {

  return (localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key) as string) : {})

}


//利用函数柯丽华接受用户入参
const piniaPlugin = (options: Options) => {

  //将函数返回给pinia  让pinia  调用 注入 context
  return (context: PiniaPluginContext) => {

    const { store } = context;

    const data = getStorage(`${options?.key ?? __piniaKey}-${store.$id}`)

    store.$subscribe(() => {

      setStorage(`${options?.key ?? __piniaKey}-${store.$id}`, toRaw(store.$state));

    })

    //返回值覆盖pinia 原始值
    return {

      ...data

    }

  }
 

————————————————
版权声明：本文为CSDN博主「小满zs」的原创文章，遵循CC 4.0 BY - SA版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq1195566313/article/details/123431769

export default piniaPlugin