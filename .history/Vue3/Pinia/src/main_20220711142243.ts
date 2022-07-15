import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPlugin from './plugin/pinia'
const app = createApp(App)

const store = createPinia()


store.use(piniaPlugin({
  key: 'pinia'
}))

app.use(store)


app.mount('#app')
