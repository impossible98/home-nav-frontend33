import ArcoVue from '@arco-design/web-vue';
import { createApp } from 'vue';

import '@arco-design/web-vue/dist/arco.css';
import App from './App.vue';

const app = createApp(App);
app.use(ArcoVue);
app.mount('#app');
