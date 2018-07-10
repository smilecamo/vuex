<template>
  <div>
    {{msg}}
    <router-link :to="{name:'HelloWorld/HelloWorld2'}">主页面下</router-link>
    <router-view></router-view>
  </div>
</template>
<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: '主页面'
    }
  }
}
</script>
