import {
  createStore
} from 'vuex'



export default createStore({
  state: {
    history: null,
  },
  mutations: {
    // 通过href判断按钮active
    changeHistory(state, obj) {
      let currenpage
      let activeColor=['#f05b56','#4ca6a9','#498fc1']
      switch (obj) {
        case '/tomatotime':
          currenpage = 0
          break;
        case '/resttime':
          currenpage = 1
          break;
        case '/halftime':
          currenpage = 2
          break;
        default:
          console.log('路径错误')
          break;
      }
      state.history = {currenpage,bg:activeColor[currenpage]}
    }
  },
  actions: {},
  modules: {}
})