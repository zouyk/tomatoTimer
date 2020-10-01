import { createApp } from 'vue'
import App from './App.vue'//引入根组件
import router from './router'//引入router
import store from './store'//引入store
import './assets/styles/normalize.css'//引入css重置样式
import '@/assets/styles/common.css'//公共样式

//通过当前href判断在当前页面
router.afterEach((to)=>{
    store.commit('changeHistory',to.href)
})
//路由重定
createApp(App).use(store).use(router).mount('#app')
