import { createApp } from 'vue';
import { router } from './router/index';

import App from './App.vue';
import axios from 'axios';

import './assets/main.css';
import './assets/noscript.css';

axios.defaults.baseURL = import.meta.env.VITE_API_ENDPOINT ?? 'http://localhost:3000';

const app = createApp(App);
app.use(router);

router.isReady().then(() => {
  app.mount('#app');
})
