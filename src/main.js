import './assets/main.scss'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)
import piniaPlugin from './assets/pinia/index.js'
app.use(piniaPlugin)

import axiosPlugin from './assets/axios/index.js'
app.use(axiosPlugin)
app.use(router)
// 引入emement-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
app.use(ElementPlus)

app.mount('#app')
