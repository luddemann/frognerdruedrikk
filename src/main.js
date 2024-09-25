import { createApp } from 'vue'
import router from './router'
import './style.css'
import App from './App.vue'
import Vue3Lottie from 'vue3-lottie'

const app = createApp(App)
app.use(router)
app.use(Vue3Lottie, { name: 'LottieAnimation' })
app.mount('#app')

