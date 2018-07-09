import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

// 状态对象 共享值
const state = {
  count: 1
}
// 改变状态对象的方法
const mutations = {
  add: (state, n) => (state.count += n),
  reduce: state => state.count--
}
// 过滤计算属性
const getters = {
  count: state => (state.count += 100)
}
export default new Vuex.Store({
  state,
  mutations,
  getters
})
