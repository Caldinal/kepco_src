import { createApp } from 'vue'
import App from './App.vue'
import './main.css'
import router from './router'

import 'vue-fullpage.js/dist/style.css'

import VueFullPage from 'vue-fullpage.js'

import veProgress from "vue-ellipse-progress";



createApp(App).use(router).use(VueFullPage).use(veProgress).mount('#app')
