import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import piniaPlugin  from './plugin/pinia'
const app = createApp(App)

const store = createPinia()


app.use(store)

app.mount('#app')
