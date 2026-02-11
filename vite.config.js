import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'

// https://vite.dev/config/
export default defineConfig({
  base: process.env.NODE_ENV === 'production'
  ? '/Noob_Xiaoyu-Web/': '/',
  publicDir: 'public', // 明确指定public目录
  server: {
    host: '0.0.0.0', // 监听所有地址，包括公网
    port: 80,     // 你可以自定义端口
    historyApiFallback: true // 支持 HTML5 模式路由的 fallback
  },
  plugins: [
    vue(),
    vueDevTools(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    },
  },
})
