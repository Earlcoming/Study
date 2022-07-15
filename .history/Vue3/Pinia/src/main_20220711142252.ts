import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPlugin from './plugin/pinia'
const pinia = createApp(App)

const pinia = createPinia()
pinia.use(piniaPlugin({
  key: 'pinia'
}))

app.use(store)


app.mount('#app')
