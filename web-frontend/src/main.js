import { createApp } from 'vue' // standard import

import App from './App.vue' // named import
import { router } from './router/index'

import './assets/main.css'

const app = createApp(App);
app.use(router);
app.mount('#app')
