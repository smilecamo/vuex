import Vue from 'vue';
import Router from 'vue-router';

const requireComponent = require.context("../views", true, /\.vue$/);
const routes = requireComponent.keys().map(fileName => {
  // 全局注册组件
  const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, "$1");
  return {
    path: `/${componentName}`,
    name: componentName,
    component: () => import(`../views/${componentName}.vue`)
  };
});

Vue.use(Router);

export default new Router({
  routes,
})
