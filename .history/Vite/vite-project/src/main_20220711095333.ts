import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App)

app.config.globalProperties.$filters = {
  format
}

app.mount("#app");
