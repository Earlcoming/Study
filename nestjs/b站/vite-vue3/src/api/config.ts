import axios from 'axios'
import type { AxiosRequestConfig } from 'axios'

const service = axios.create({
  baseURL: 'http://localhost:3000/',
  timeout: 8000,
})



// 请求拦截器
service.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // console.log('请求拦截', config)
    if (config.headers) {
      (config.headers as any).Authorization = ''
    }
    return config
  },
  (err) => {
    return Promise.reject(new Error(err))
  }
)

// 响应拦截
service.interceptors.response.use(
  (res) => {
    const { data } = res
    // console.log('成功数据', res)
    return res
  },
  (err) => {
    return Promise.reject(new Error(err))
  }
)

export default service