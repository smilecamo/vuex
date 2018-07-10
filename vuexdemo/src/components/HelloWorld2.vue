<template>
  <div>
    {{msg}}--{{$router.username}}--{{$router.id}}
  </div>
</template>
<script>
export default {
  name: 'HelloWorld2',
  data () {
    return {
      msg: '主页面下的子页面'
    }
  }
}
</script>
