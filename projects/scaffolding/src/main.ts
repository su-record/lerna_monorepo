import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import { store, key } from './store';

import i18n from './i18n';

const app = createApp(App);
app.use(store, key);
app.use(router);
app.use(i18n);
app.mount('#app');
