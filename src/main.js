import { createApp } from 'vue'
import App from './App.vue'//引入根组件
import router from './router'//引入router
import store from './store'//引入store
import './assets/styles/normalize.css'//引入css重置样式
import '@/assets/styles/common.css'//公共样式
import { SET_COUNTER_TYEP } from '@/store/mutation-types'


//通过当前href判断在当前页面
router.afterEach((to)=>{
    store.commit(SET_COUNTER_TYEP,to.href)
})

createApp(App).use(store).use(router).mount('#app')
