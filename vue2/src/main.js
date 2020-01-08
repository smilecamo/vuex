import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;
  // 全局前置守卫
  // 在这里一般做路由鉴权
router.beforeEach((to,from,next)=>{
  console.log('beforeEach')
  next()
})
// 解析钩子 区别是在导航被确认之前
// 同时在所有组件内守卫和异步路由组件被解析之后，解析守卫就被调用。
router.beforeResolve((to,from,next)=>{
  console.log('beforeResolve')
  next()
})
// 后置钩子
router.afterEach((to,from)=>{
  console.log('afterEach')
})
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
