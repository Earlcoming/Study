import { createApp } from "vue";
import App from "./App.vue";

import Card from "@/components/Card";
createApp(App).component("Card", Card).mount("#app");
