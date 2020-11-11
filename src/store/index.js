import {
  createStore
} from 'vuex'
import moment from 'moment'
import * as types from './mutation-types'

const DATE_TYPE = 'mm:ss'
const getTimerType = (index) => ['tomatoTime', 'restTime', 'halfTime'][index]
export default createStore({
  state: {
    history: null, //currenpage=0 来一次番茄 1 休息一下  2小憩一会
    //时间定义
    tomatoTime: moment({
      minutes: 20
    }).format(DATE_TYPE),
    restTime: moment({
      minutes: 5
    }).format(DATE_TYPE),
    halfTime: moment({
      minutes: 15
    }).format(DATE_TYPE),
    currentCounter: null //timer{type,timer:intervalId}
  },
  mutations: {
    // 通过href判断按钮active
    [types.SET_COUNTER_TYEP](state, obj) {
      let currenPage
      let activeColor = ['#f05b56', '#4ca6a9', '#498fc1']
      switch (obj) {
        case '/tomatotime':
          currenPage = 0
          break;
        case '/resttime':
          currenPage = 1
          break;
        case '/halftime':
          currenPage = 2
          break;
        default:
          console.log('路径错误')
          break;
      }
      state.history = {
        currenPage,
        bg: activeColor[currenPage]
      }
    },
    //减少计时器时间
    [types.SUBTRACT_COUNTING](state, counterType) {
      const dealWithKey = getTimerType(counterType)
      const toSetTime = moment(state[dealWithKey], DATE_TYPE).subtract(1, 'seconds').format(DATE_TYPE)
      // 计时结束重置时间 并且抬起按钮
      if (toSetTime == "00:00") {
        state.currentCounter && window.clearInterval(state.currentCounter.timer)
        state.currentCounter = null
        const doneTimeTip = ['来此番茄', '休息片刻', '小憩一会'][counterType]
        window.alert(`${doneTimeTip}已经结束了!!`)
      }
      state[dealWithKey] = toSetTime
    },
    //缓存定时器timer
    [types.SET_COUNTER_TIMER](state, payLoad) {
      //  清除正在计时的计时器
      state.currentCounter && window.clearInterval(state.currentCounter.timer)
      //判断 payload
      if (payLoad === null) {
        state.currentCounter = null
      } else {
        const {
          type,
          timer,
          restTime
        } = payLoad

        if (restTime) {
          const dealWithKey = getTimerType(type)
          state[dealWithKey] = restTime
        }
        state.currentCounter = {
          type,
          timer
        }
      }
    }
  },
  actions: {
    //开始计时
    [types.START_COUNTING](context, counterType) {
      //计时是否结束
      let restTime = null
      const dealWithKey = getTimerType(counterType)
      if (context.state[dealWithKey] === '00:00') {
        restTime = ['20:00', '05:00', '15:00'][counterType]
      }
      //  commit mutation 减少时间
      const timer = window.setInterval(() => {
        context.commit(types.SUBTRACT_COUNTING, counterType)
      }, 1000)
      //缓存定时器 timer
      context.commit(types.SET_COUNTER_TIMER, {
        type: counterType,
        timer,
        restTime
      })
    },
  },
  modules: {}
})