import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入ArcoVue模板和样式
import ArcoVue from '@arco-design/web-vue';
import '@arco-design/web-vue/dist/arco.css';
import '@/assets/icon/iconfont.css'
import Header from '@/components/Header.vue'
import Aside from '@/components/Aside.vue'
// Vue.component('Header', Header)

// 基于准备好的dom，初始化echarts实例

createApp(App).use(store).use(router).use(ArcoVue).component('Header', Header).component('Aside', Aside).mount('#app')
