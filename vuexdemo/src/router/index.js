import Vue from 'vue'
import Router from 'vue-router'
import Count from '@/components/Count'
import Hello from '@/components/Hello'
import Hi1 from '@/components/Hi1'
import Hi2 from '@/components/Hi2'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Count',
      component: Count
    },
    {
      path: '/Hello',
      name: 'Hello',
      components: [
        
      ]
    }
  ]
})
