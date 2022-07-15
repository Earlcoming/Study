import { createApp } from "vue";
import App from "./App.vue";

const app = createApp(App)


type Filter = {
  format: (str: ) => string
}
declare module '@vue/runtime-core' {
  export interface ComponentCustomProperties {
    $filters: Filter
  }
}

app.config.globalProperties.$filters = {
  format<T>(str: T): string {
    return `真·${str}`
  }
}

app.mount("#app");
