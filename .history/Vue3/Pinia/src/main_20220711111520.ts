import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const app = createApp(App)

const store = createPinia()
app.use(createPinia)

app.mount('#app')
