import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import '@/assets/style/bl.css'
import less from 'less'


createApp(App).use(store).use(less).use(ElementPlus).use(router).mount('#app')
