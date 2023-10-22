


import { createApp } from 'vue';
import axios from 'axios';
import App from './App.vue';
import router from './router/index.js';

import vuetify from './vuetify.config.js';

import 'vuetify/dist/vuetify.min.css';


const app = createApp(App);
app.use(router);
app.use(vuetify);

app.config.globalProperties.$axios = axios;
app.mount('#app');


