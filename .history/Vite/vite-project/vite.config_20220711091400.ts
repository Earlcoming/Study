import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from 'un'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
});
