import { store, key } from './store/index';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

createApp(App).use(router).use(store, key).mount('#app')
