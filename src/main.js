import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import router from './router/index';
import 'normalize.css';
import '/@/styles/index.scss';
import '/@/styles/common.scss';

createApp(App).use(ElementPlus).use(router).mount('#app')
