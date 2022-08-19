import { createApp } from 'vue';
import App from './App.vue';

import OutSideClick from './directives/OutSideClick';

const app = createApp(App);
app.directive('outside', OutSideClick);
app.mount('#app');
