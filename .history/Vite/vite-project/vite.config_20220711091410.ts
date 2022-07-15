import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import AutoImport from 'unplugin-auto-import'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),AutoImport()],
  resolve: {
    alias: {
      "@": "/src/",
    },
  },
});
