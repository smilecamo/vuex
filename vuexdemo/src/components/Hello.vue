<template>
  <div>
   <h1>{{msg}}</h1>
   <router-view></router-view>
   <router-view name='right'></router-view>
  </div>
</template>
<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: 'I Hello'
    }
  }
}
</script>
