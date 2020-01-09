import Vue from 'vue';
import Vuex from 'vuex';
import defaultState from './state/state'
import mutations from './mutations/mutation'
import getters from './getters/getter'
import actions from './actions/action'

const isDev = process.env.NODE_ENV === 'development'
Vue.use(Vuex);
export default new Vuex.Store({
  // 判断是否开发环境 设置是否可以直接修改state
  strict: isDev,
  // 初始化数据存放区
  state: defaultState,
  // 事件修改状态区
  mutations,
  // store的计算属性
  getters,
  actions,
  modules: {
  },
});
