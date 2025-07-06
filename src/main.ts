import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';

// import { worker } from '../mock/browser';

if (import.meta.env.DEV) {
  const { worker } = await import('../mock/browser');
  worker
    .start({
      serviceWorker: {
        url: '/mockServiceWorker.js', // Явно указываем путь
      },
      onUnhandledRequest: 'bypass', // Игнорировать необработанные запросы
    })
    .catch(console.error);
}

const app = createApp(App);

app.use(createPinia());
app.use(router);

app.mount('#app');
