import { createApp } from 'vue'
import App from './App.vue'
import 'jquery'
import 'popper.js'
import 'bootstrap'
import router from './router'
createApp(App).use(router).mount('#app')
