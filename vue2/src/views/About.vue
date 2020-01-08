<template>
  <div class="about">
    <h1>{{text}}====={{object.a}}</h1>
    <!-- 当通过query 传递参数时 可以通过this.$route.query 获取 -->
    <router-link to="about">about </router-link>
    <router-link :to="{path:'about',query:{a:'1111'}}">about </router-link>
    <router-link :to="{path:`/v2/about/1234`}">about1234 </router-link>
    <router-link :to="{path:`/v2/about/456`}">about456 </router-link>
    <router-link :to="{path:`/router`}">router导航守卫</router-link>
    <!-- 命名路由 -->
    <router-link :to="{name:'About',params:{id:1111}}">about </router-link>
    <router-link to="about">about </router-link>
    <router-link to='slot'>slot</router-link>
  </div>
</template>
<script>
export default {
  props:['id'], // 组件中定义props
  data() {
    return {
      text: 1,
      a: 1,
      object: {},
    };
  },
  beforeRouteUpdate(to, from, next){
    console.log(to) // 获取传递的值
    next()
  },
  // mounted(){
  //   console.log(this.$route.query) // 获取传递的值
  // },
  created() {
    setInterval(() => {
      this.$set(this.object, 'a', 5);
      this.a = 33333;
    }, 1000);
    setInterval(() => {
      this.$delete(this.object, 'a');
    }, 7000);
  },
  methods: {
    someMethod(newText, oldText) {
      // console.log(newText, oldText);
    },
  },
  watch: {
    text(newText, oldText) {
      // console.log(newText, oldText);
    },
    a: {
      handler: 'someMethod', // 方法名,调用methods中定义的方法
      immediate: true, // 立即执行一次函数,侦听开始之后被立即调用
      deep: true, // 只要是改变了就会触发方法
    },
  },
};
</script>
