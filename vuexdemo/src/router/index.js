import Vue from 'vue'
import Router from 'vue-router'
import Count from '@/components/Count'
import HelloWorld2 from '@/components/HelloWorld2'
import HelloWorld from '@/components/HelloWorld'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Count',
      component: Count
    },
    {
      path: '/helloworld',
      component: HelloWorld,
      children: [
        {
          name: 'helloworld2',
          path: 'HelloWorld2',
          component: HelloWorld2
        }
      ]
    }
  ]
})
