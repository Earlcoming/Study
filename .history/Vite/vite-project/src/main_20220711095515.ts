import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App)

declare module '@vue/runtime-core' {
  exp
}

app.config.globalProperties.$filters = {
  format<T>(str: T): string {
    return `真·${str}`
  }
}

app.mount("#app");
