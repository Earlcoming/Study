import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPlugin from './plugin/pinia'
const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPlugin({
  key: 'pinia'
}))

app.use(pinia)


app.mount('#app')
