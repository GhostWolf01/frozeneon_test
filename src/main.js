import { createApp } from 'vue'
import router from './router'
import App from './App.vue'

import './assets/font/stylesheet.css'
import 'roboto-fontface/css/roboto/sass/roboto-fontface.scss'

createApp(App).use(router).mount('#app')
