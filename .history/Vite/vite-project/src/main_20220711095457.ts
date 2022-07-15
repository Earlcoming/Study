import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App)

declare mo

app.config.globalProperties.$filters = {
  format<T>(str: T): string {
    return `真·${str}`
  }
}

app.mount("#app");
