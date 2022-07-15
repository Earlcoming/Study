import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPlugin from './plugin/pinia'
const app = createApp(App)

const pinia = createPinia()
pinia.use(piniaPlugin())

app.use(pinia).mount('#app')
