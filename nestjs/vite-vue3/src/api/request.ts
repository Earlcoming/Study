import request from './config'

const login = (params: any) => {
  return request({
    method: 'get',
    url: 'user',
    params
  })
}

// 获取验证码
const code = () => {
  return request({
    method: 'get',
    url: '/user/code'
  })
}


export {
  login,
  code
}