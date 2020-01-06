import Vue from 'vue';
import Router from 'vue-router';
// 自动化注入路由函数
// const requireComponent = require.context("../views", true, /\.vue$/);
// const routes = requireComponent.keys().map(fileName => {
//   // 全局注册组件
//   const componentName = fileName.replace(/^\.\/(.*)\.\w+$/, "$1");
//   return {
//     path: `/${componentName}`,
//     name: componentName, //路由命名
//     component: () => import(`../views/${componentName}.vue`)
//   };
// });
// const routes =[{}]
Vue.use(Router);

export default new Router({
  routes: [
    {
      path: "/about/:id?", 
      /** 
       * :id 代表要传的参数 ? 代表可传可不传
       * 此时这样可以在组件中通过this.$route.params.id 来获取传递的参数
      */
      props: true,
      /**
       * 当定义了props:true 此时组件可以直接获取 
       */
      // redirect: "/about",
      name: "aboutPage",
      component: () => import("../views/About.vue"),

      meta: {
        title: "this is page",
        requiresAuth: true
      },
      // 在路由中定义children 在组件中通过<router-view>显示
      children: [
        {
          path: "children",
          component: () => import("../views/slot.vue")
        }
      ]
    }
    /**
     *命名路由:在路由中通过name来命令
     *在<router-link :to="{name:'aboutPage'}"">中跳转
     *在router.push({name:'aboutPage'}) 中跳转
     */
    // ...routes
  ],
  mode: "hash", // hash 路由带# history 不带# 能呗爬虫爬取
  base: "/base/", // 给路由增加基础前缀 /base/about
  linkActiveClass: "link_active_class", //全局配置<router-link>默认激活的class 当处于当前路由时会加上class
  linkExactActiveClass: "link_active_class", //全局配置<router-link>默认精准匹配激活的class
  scrollBehavior(to, from, savedPosition) {
    //异步滚动
    if (savedPosition) {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve(savedPosition);
        }, 500);
      });
    } else {
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({ x: 0, y: 0 });
        }, 500);
      });
    }
  },
  fallback: true // 当浏览器不支持 history.pushState
  //控制路由是否应该回退到 hash 模式。默认值为 true。
});
