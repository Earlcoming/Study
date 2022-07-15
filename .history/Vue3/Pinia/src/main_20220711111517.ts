import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
const app = createApp(App)

const store = 
app.use(createPinia)

app.mount('#app')
