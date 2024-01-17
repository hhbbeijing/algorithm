import './assets/main.css'
import hhb from "hhb-vue3-ui"
import { createApp } from 'vue'
import App from './App.vue'
const app = createApp(App)
app.use(hhb)
app.mount('#app')
