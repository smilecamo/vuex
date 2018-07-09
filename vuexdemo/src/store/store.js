import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态对象 共享值
const state = {
  count: 1,
  count1: 3
}
// 改变状态对象的方法
const mutations = {
  add: state => state.count++,
  reduce: state => state.count--,
  add3: state => state.count1++,
  reduce3: state => state.count1--
}
export default new Vuex.Store({
  state,
  mutations
})
