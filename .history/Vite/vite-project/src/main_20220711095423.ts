import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App)

app.config.globalProperties.$filters = {
  format(str:) {
  return `真·${str}`
  }
}

app.mount("#app");
