import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index';
import { setupStore } from './store/index.ts';
import ElementPlus from 'element-plus';

// import ElementPlus  'element-plus'
import 'element-plus/lib/theme-chalk/index.css'
import 'normalize.css';
import '/@/styles/index.scss';
import '/@/styles/common.scss';

createApp(App).use(router).use(ElementPlus).use(setupStore).mount('#app')
