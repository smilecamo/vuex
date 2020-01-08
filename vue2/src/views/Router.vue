<template>
  <div>
    <h1>路由守卫</h1>
    <router-link :to="{path:'/v2/about/123'}">v2/about/123</router-link> <br>
    <router-link :to="{path:'/v2/about/456'}">v2/about/456</router-link>
  </div>
</template>

<script>
  export default {
    beforeRouteEnter(to,from,next){
      /**
       * 渲染前触发
       * 此时不能获取到this 可以通过next(vm=>{vm}) 获取数据
       * 需要调用next
       */
      next()
    },
    beforeRouteUpdate(to,from,next){
      /**
       * 当渲染相同组件时触发
       * 对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候
       * 可以在这里获取数据取代mounted
       */
      next()
    },
    beforeRouteLeave(to,from,next){
      /**
       * 导航离开时触发
       */
      const answer = window.confirm('Do you really want to leave? you have unsaved changes!')
      if (answer) {
        next()
      } else {
        next(false)
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>