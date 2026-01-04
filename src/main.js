import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

import './assets/main.css'
// eslint-disable-next-line no-undef
if (process.env.NODE_ENV === 'development') {
  window.__VUE_DEVTOOLS_CONFIG__ = {
    showWidget: false,
  }
}
const app = createApp(App)
app.use(router)
app.use(ElementPlus)

app.mount('#app')
