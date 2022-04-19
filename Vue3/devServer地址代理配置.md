## 1. 创建.env.development 和.env.production两个文件

### .env.development

```
ENV = 'development'

VUE_APP_BASE_API = 'api'
```

### .env.production

```
ENV = 'production'

VUE_APP_BASE_API = 'prod-api'
```

## 2. axios配置create baseURL 

```ts
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
})
```

## 3. vue.config.js 配置devServer代理

```ts
devServer: {
  https: false,
  proxy: {
    '/api': {
      target: 'http://211.149.185.82:8889/api/private/v1/',
      changeOrigin: true, // 解决跨域问题
      pathRewrite: {
        '^/api': ''
      }
    }
  }
}
```